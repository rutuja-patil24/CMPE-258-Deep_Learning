# Assignment - 06


## LLM Fine-tuning & Continued Pretraining with Unsloth
This repository contains a comprehensive exploration of fine-tuning and continued pretraining of various open-weight LLMs using Unsloth. The project is divided into multiple parts, each focusing on a unique aspect of LLM development and deployment — including fine-tuning for diverse use cases, reward modeling, exporting to Ollama, and building production-ready chatbots.


---

### Part A: Fine-tuning – 4 Unique Use Cases
We fine-tuned four LLMs on different task varieties using Unsloth, each with an appropriate dataset and chat model template.

- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing

---

### Part B: Continued Pretraining – Learning a New Language
We used Unsloth’s continued pretraining feature to make an LLM understand a low-resource language using token-level masking and unsupervised data.

- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing
  
---

### Part C: Chat Templates and Experimental Colabs
Implemented several experiments combining chat templates and fine-tuning strategies:

Classification with Chat Templates
Conversational Fine-Tuning with Alpaca Format
Context Window Extension for TinyLLaMA
Multi-Task Fine-Tuning: Using datasets from multiple tasks for a single training run

- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing

---

### Part D: Reward Modeling with ORPO and DPO
We implemented both ORPO (Online Reinforcement Preference Optimization) and DPO (Direct Preference Optimization) reward modeling using Unsloth.

- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing

---

### Part E: Continued Fine-Tuning from Custom Checkpoints
Explored the advanced scenario of resuming fine-tuning from a custom checkpoint:
Base Model: LLaMA 3 or Phi-3
Checkpoint: Custom SFT model from previous runs
Use Case: Domain-specific dialogue enhancement


- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing
  
---

### Part F: Fine-Tuning for Mental Health Chatbot
Based on this Medium tutorial, we fine-tuned Phi-3 for mental health support tasks.

Dataset: EmpatheticDialogues, Mental Health QA
Objective: Build a safe, supportive conversational AI
Tools: Unsloth with OpenChat template

- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing


---

### Part G: Exporting to Ollama & Inference
We demonstrate how to export a fine-tuned Unsloth model to Ollama and run chat inference locally.


- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing


---
