# Assignment 9 – Contrastive & Transfer Learning Across Modalities  
This repository demonstrates advanced deep learning techniques including **supervised contrastive learning**, **zero-shot classification**, and **transfer learning** across multiple modalities such as **image, audio, video, and text** using TensorFlow, PyTorch, TFHub, and OpenAI CLIP.

---

## Part 1: Supervised Contrastive Learning vs Softmax Classification

This notebook implements the two-stage supervised contrastive framework using `multiclass N-pairs` and `NT-Xent` losses followed by a softmax classifier head.

- Visualizations: PCA plots, contrastive embedding visualizations, and accuracy comparisons
- Dataset: MNIST and Fashion MNIST

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1yojm8TRBjLXe7UI7Fg5ZQLq8Zofm-VAW?usp=sharing

---

## Part 2: Transfer Learning on Images, Audio, Video & Text

Demonstrates **feature extraction and fine-tuning** with pretrained models across 4 data modalities:

### Image Classification (Cats vs Dogs)

- Models: EfficientNetB0, ResNet
- Mode: Feature extraction + fine-tuning

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1B9gxi8iWaCmmzgJKChZ37gqPj1x2P2ur?usp=sharing

---

### Audio Classification (YAMNet)

- Model: YAMNet (TFHub)
- Task: Predict sound class from uploaded `.wav` files

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1q8pd2E1hhoVMEH3Z1bw1JXqBGs6C-rKn?usp=sharing

---

### Video Action Recognition (UCF101)

- Model: I3D (Inflated 3D ConvNet from TFHub)
- Dataset: UCF101
- Task: Zero-shot or fine-tuned action classification

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1Oc8TPXJWhDdTlgPSw7z5tr-3ENlLvvff?usp=sharing

---

###  NLP Sentiment Classification

- Models: BERT (TFHub), USE
- Dataset: IMDB movie reviews
- Task: Binary sentiment classification

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1vD7JTO-pX-JUQXM6Y9IQEnahPR0GJ4Vm?usp=sharing

---

##  Part 3: Zero-Shot + Transfer Learning using CLIP & BiT

###  Part 3a: Zero-Shot Image Classification using CLIP

- Model: OpenAI CLIP (ViT-B/32)
- Dataset: Uploaded images and CIFAR-10
- Task: Classify images using text prompts without training

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1xyea-uHyMWmgO0isuZiZvfU53jDMueXr?usp=sharing

---

###  Part 3b: Transfer Learning with EfficientNet (Flowers Dataset)

- Model: `EfficientNetB0` via `tf.keras.applications`
- Task: Flower classification with both feature extraction & fine-tuning

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1ephOE-GzZ6640I0oIHMNsfXYCaYO6cQR?usp=sharing

---

##  Part 4: Vision Transfer Learning Benchmarks (Classic Datasets)

Demonstrates BiT and EfficientNet across 3 standard vision benchmarks:

### a) MNIST  
### b) Fashion MNIST  
### c) CIFAR-10  

- Includes comparisons with SOTA models: ConvNeXt V2 and MLP-Mixer
- Shows both frozen and fine-tuned performance

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1YZM6rLvNUZ6GC2cyABj32MJv9ThcHRhC?usp=sharing

---

##  Part 5: Medical Vision Tasks – X-ray & 3D CT Scan

### a) Pneumonia X-ray Classification

- Model: ConvNet or EfficientNet
- Dataset: Chest X-rays

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1PVtrGTlS62CqKZeFk5P9RUWbqSHwVXJl?usp=sharing

---

### b) 3D CT Scan Classification

- Model: 3D CNN (Keras example)
- Dataset: Lung CT scans

🔗 **Colab Link**:  
https://colab.research.google.com/drive/1pTwhxRHNww3No8Phc1Fb6EfUxn-R8sPz?usp=sharing

---

## 📹 Demo Walkthrough Videos

- 🎥YouTube Playlist: https://youtu.be/d0ca4bKi5v4

---

