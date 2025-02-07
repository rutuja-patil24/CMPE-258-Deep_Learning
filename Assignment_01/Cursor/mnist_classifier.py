import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Flatten, Dropout, Input
from tensorflow.keras.metrics import AUC
from tensorflow.keras.utils import to_categorical
import matplotlib.pyplot as plt
import numpy as np

# Load and preprocess MNIST dataset
def load_and_preprocess_data():
    (x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()
    
    # Normalize pixel values to range [0,1]
    x_train = x_train.astype('float32') / 255.0
    x_test = x_test.astype('float32') / 255.0
    
    # Convert integer labels to one-hot encoding
    y_train = to_categorical(y_train, num_classes=10)
    y_test = to_categorical(y_test, num_classes=10)
    
    return (x_train, y_train), (x_test, y_test)

# Build the neural network model
def create_model():
    model = Sequential([
        # Explicit Input layer
        Input(shape=(28, 28)),
        Flatten(),
        
        # First dense layer with 256 units and ReLU activation
        Dense(256, activation='relu'),
        Dropout(0.3),
        
        # Second dense layer
        Dense(128, activation='relu'),
        Dropout(0.3),
        
        # Third dense layer
        Dense(64, activation='relu'),
        Dropout(0.3),
        
        # Output layer with 10 units (one per digit) and softmax activation
        Dense(10, activation='softmax')
    ])
    
    return model

# Plot training history
def plot_training_history(history):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
    
    # Plot accuracy
    ax1.plot(history.history['accuracy'], label='Training Accuracy')
    ax1.plot(history.history['val_accuracy'], label='Validation Accuracy')
    ax1.set_title('Model Accuracy')
    ax1.set_xlabel('Epoch')
    ax1.set_ylabel('Accuracy')
    ax1.legend()
    
    # Plot loss
    ax2.plot(history.history['loss'], label='Training Loss')
    ax2.plot(history.history['val_loss'], label='Validation Loss')
    ax2.set_title('Model Loss')
    ax2.set_xlabel('Epoch')
    ax2.set_ylabel('Loss')
    ax2.legend()
    
    plt.tight_layout()
    plt.show()

def main():
    # Load and preprocess data
    (x_train, y_train), (x_test, y_test) = load_and_preprocess_data()
    
    # Create and compile model
    model = create_model()
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy', AUC(name='auc')]
    )
    
    # Print model summary
    model.summary()
    
    # Train the model
    history = model.fit(
        x_train, y_train,
        epochs=15,
        batch_size=32,
        validation_split=0.2,
        verbose=1
    )
    
    # Evaluate model on test set
    test_results = model.evaluate(x_test, y_test, verbose=0)
    metrics = ['Loss', 'Accuracy', 'AUC']
    
    print("\nTest Set Results:")
    for metric, value in zip(metrics, test_results):
        print(f"{metric}: {value:.4f}")
    
    # Plot training history
    plot_training_history(history)

if __name__ == "__main__":
    main()