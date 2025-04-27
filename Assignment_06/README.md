# Assignment - 06


## LLM Fine-tuning & Continued Pretraining with Unsloth
This repository contains a comprehensive exploration of fine-tuning and continued pretraining of various open-weight LLMs using Unsloth. The project is divided into multiple parts, each focusing on a unique aspect of LLM development and deployment — including fine-tuning for diverse use cases, reward modeling, exporting to Ollama, and building production-ready chatbots.


---

### Part A: Fine-tuning – 4 Unique Use Cases
We fine-tuned four LLMs on different task varieties using Unsloth, each with an appropriate dataset and chat model template.

1) Chat UseCase (Finetuning TinyLlama):

- Colab Link: https://colab.research.google.com/drive/1EVOxgaJhmhh4xhOT5TnOg1dEcaNd2R8c?usp=sharing

2) Coding UseCase (Finetuning Phi-3):

- Colab Link: https://colab.research.google.com/drive/1lOEumeR9nVJHCs8lHr-zqlmYg0_61hfj?usp=sharing

3) Sentiment Classification UseCase (Qwen-0.5B-Chat):

- Colab Link: https://colab.research.google.com/drive/1limuoqbY_83Plz4jRZbegNkXDpXZmvZn?usp=sharing

4) Summarization UseCase (LLaMA 2):
   
- Colab Link: https://colab.research.google.com/drive/13KpEzX56a-GgyJ07mk1Yi-20675-FJlC?usp=sharing

---

### Part B: Continued Pretraining – Learning a New Language
We used Unsloth’s continued pretraining feature to make an LLM understand a low-resource language using token-level masking and unsupervised data.

- Colab Link: https://colab.research.google.com/drive/1ezbn_w2u3e8Gx2iNVzT2j9gxUxclcRcQ?usp=sharing
  
---

### Part C: Chat Templates and Experimental Colabs
Implemented several experiments combining chat templates and fine-tuning strategies:

1) Classification with Chat Templates:

- Colab Link: https://colab.research.google.com/drive/10CtN2HMid-emcLVrZ-tZXxzKM_WZLmXB?usp=sharing
  
2) Conversational Fine-Tuning with Alpaca Format:

- Colab Link: https://colab.research.google.com/drive/1lxj1k4PwL6kNXdBFI6ml8Oakj-hrCx8g?usp=sharing

3) Context Window Extension for TinyLLaMA:

- Colab Link: https://colab.research.google.com/drive/18nOuelbT9TdJVocDRpr2pasuzHmsihss?usp=sharing
  
4) Multi-Task Fine-Tuning: Using datasets from multiple tasks for a single training run:

- Colab Link: https://colab.research.google.com/drive/1vDjhX1luZ9LXa0s41IRw3JpDZ9EHpiiL?usp=sharing

---

### Part D: Reward Modeling with ORPO and DPO
We implemented both ORPO (Online Reinforcement Preference Optimization) and DPO (Direct Preference Optimization) reward modeling using Unsloth.

1) ORPO Reward Modeling with Unsloth:

- Colab Link: https://colab.research.google.com/drive/1VG-JKBV89KGSn-r97wsB1z6hszvwYy-f?usp=sharing

2) DPO Reward Modeling with Unsloth:

- Colab Link: https://colab.research.google.com/drive/1KdZIeE2Q3A03kTagdFxkfaXzqJ73TjZ5?usp=sharing

---

### Part E: Continued Fine-Tuning from Custom Checkpoints
Explored the advanced scenario of resuming fine-tuning from a custom checkpoint:
Base Model: LLaMA 3 
Checkpoint: Custom SFT model from previous runs
Use Case: Domain-specific dialogue enhancement


- Colab Link: https://colab.research.google.com/drive/1YV4dMOBqGM6dn8YwfOlremI6oi_q28Bs?usp=sharing
  
---

### Part F: Fine-Tuning for Mental Health Chatbot
Based on this Medium tutorial, we fine-tuned Phi-3 for mental health support tasks.

Dataset: EmpatheticDialogues, Mental Health QA
Objective: Build a safe, supportive conversational AI
Tools: Unsloth with OpenChat template

- Colab Link: https://colab.research.google.com/drive/1N2ATLJezR7wOQ7C26CwcNNINBaFpqoqn?usp=sharing


---

### Part G: Exporting to Ollama & Inference
We demonstrate how to export a fine-tuned Unsloth model to Ollama and run chat inference locally.


- Colab Link: https://colab.research.google.com/drive/1faXDCrutStPdt43JiI0Hd57mEdufkRA6?usp=sharing


---

---

### Demo Video:


- YouTube Video Link: https://youtu.be/q3JzcdSDRs4


---

