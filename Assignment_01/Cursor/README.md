# MNIST Digit Classifier

## Overview
This project is a **deep learning-based MNIST digit classifier** that recognizes handwritten digits (0-9) using a fully connected neural network. The model is trained on the **MNIST dataset** and evaluated using accuracy and AUC (Area Under Curve).

## Features
- **Loads and Preprocesses MNIST Data**:
  - Normalizes pixel values to [0,1] range.
  - Converts labels to one-hot encoding.
- **Builds a Neural Network**:
  - Uses multiple **Dense layers** with **ReLU activation**.
  - Includes **Dropout layers** to prevent overfitting.
- **Compiles and Trains the Model**:
  - Uses **Adam optimizer** for fast convergence.
  - Employs **categorical cross-entropy loss** for classification.
- **Evaluates Model Performance**:
  - Computes **accuracy** and **AUC (Area Under Curve)**.
  - Plots **training accuracy & loss trends**.
- **Visualizes Training History** using **Matplotlib**.

## Technologies Used
- **TensorFlow/Keras** – Deep learning framework for building and training the model.
- **NumPy** – Handles numerical computations.
- **Matplotlib** – Plots model accuracy and loss.

