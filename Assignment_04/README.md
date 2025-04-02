# Assignment – 4  
**3-Layer Deep Neural Network for Non-Linear Regression** Implemented using NumPy, PyTorch, and TensorFlow 
This repository contains multiple Colab notebooks demonstrating the same 3-layer deep neural network across a wide range of frameworks, from scratch to high-level APIs. All models predict a complex 3-variable non-linear function and visualize training loss, predictions, and 4D plots.

---

## ✅ NumPy & Manual TensorFlow Versions

### 1. NumPy From Scratch (Manual Forward & Backward Propagation)
- Colab Link: https://colab.research.google.com/drive/1yNOh4qjHn1kUQZp3wzEj4ONY1vLe6J0R?usp=sharing


### 2. TensorFlow From Scratch with tf.einsum (No Layers)
- Colab Link: https://colab.research.google.com/drive/1vMS_ewUO12BzTtp_S3qvMDwQfM6SZ2xa?usp=sharing

---

## PyTorch Versions

### 3. PyTorch From Scratch (Manual Layers, No `nn.Module`)
- Colab Link: https://colab.research.google.com/drive/1A65oQDr54_d7CMW_B08z76s8nKZFf5FW?usp=sharing

### 4. PyTorch with `nn.Module` (Class-Based)
- Colab Link: https://colab.research.google.com/drive/1Y1PXaXXs6FD9sJGq8ZxwHBKUZL1Xa4uL?usp=sharing

### 5. PyTorch Lightning Version
- Colab Link: https://colab.research.google.com/drive/1DOFFv_N8c5bSgILkZbim5LHtqnc60mCc?usp=sharing

---

##  TensorFlow High-Level API Versions

### 6. TensorFlow Sequential API
- Colab Link: https://colab.research.google.com/drive/17duWTetG06YmnrnpYwmJQRXIXcHPT8oF?usp=sharing
  
### 7. TensorFlow Functional API
- Colab Link: https://colab.research.google.com/drive/1-zr99vHS3moC9CW4RmCDWQN-1wo_cbPQ?usp=sharing

### 8. TensorFlow Subclassed API (`Model` Subclass)
- Colab Link: https://colab.research.google.com/drive/1eNFp84oAiKM8tX_YGXySM0_DcroSmWJy?usp=sharing

### 9. TensorFlow Low-Level (Manual Variables + tf.einsum)
- Colab Link: https://colab.research.google.com/drive/10aI28q15XaWNOBn16nQ9RXH8Dc6jukOX?usp=sharing

### 10. TensorFlow Built-in Layers (Sequential with Denses)
- Colab Link: https://colab.research.google.com/drive/1c2fB8jIp6Pxqew5wc1CGIbTxAXHZtvi9?usp=sharing


---

## 📹 Demo Video (Optional)

- YouTube Link: https://youtu.be/NkHWByY-6wc

---

📌 Each notebook contains:
- Training loss plot  
- Actual vs predicted plot  
- 4D visualization (X1, X2, X3 + y color map)  
- Custom test input prediction  
- Same architecture: 3 → 64 → 32 → 1  
