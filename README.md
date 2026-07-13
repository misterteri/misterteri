# Hey, I'm Marcelino 👋

<p align="center">
<a target="_blank" href="https://www.linkedin.com/in/marcelino-gilbert-07823621a/"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></img></a>
<a target="_blank" href="mailto:marcelinogilbert26@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"></img></a>
</p>

- 🤖 **AI Engineer at Gemtek Technology** — sole AI developer in the IT department, building production RAG pipelines, LLM agents, and edge AI systems.
- 🎓 B.Sc. Electrical Engineering & Computer Science, International Bachelor Program, Tsing Hua College, [National Tsing Hua University](https://eecs-gs.site.nthu.edu.tw/index.php?Lang=en) (2024).
- 🔭 Focused on retrieval-augmented generation, LLM evaluation, and applied AI in production — not just demos that work once.

## 🚀 Featured projects

### [rag-epub](https://github.com/misterteri/rag-epub) — local-first RAG over classic books

Hybrid retrieval (BM25 + dense) → cross-encoder reranking → local LLM generation, tuned against a
100-question RAGAS golden set with a documented decision log (every experiment, kept or discarded,
with the numbers, gated by paired-bootstrap significance). Self-hosted Weaviate — no cloud vector DB,
and local Ollama generation, so you can run the whole pipeline yourself.

[![Open in Spaces](https://huggingface.co/datasets/huggingface/badges/resolve/main/open-in-hf-spaces-md.svg)](https://huggingface.co/spaces/misterteri/rag-epub) &nbsp;|&nbsp; **[Read the eval methodology →](https://github.com/misterteri/rag-epub/blob/main/eval/RESULTS.md)**

### [rag-sql](https://github.com/misterteri/rag-sql) — natural-language → SQL agent with a guardrail

LangGraph agent that turns natural language into SQL, with a self-correcting repair step and an
adversarial guardrail in front of execution. Evaluated on a self-authored 111-question golden set
against a synthetic database (not Spider/BIRD): 0.77 exec-accuracy overall (0.93 easy / 0.89 medium
/ 0.32 hard, ±~0.05 bootstrap CI), 0.99 valid-SQL rate, and the guardrail blocked 34/34 adversarial
attempts with 0 false positives across 27 benign edge cases.

[![Open in Spaces](https://huggingface.co/datasets/huggingface/badges/resolve/main/open-in-hf-spaces-md.svg)](https://huggingface.co/spaces/misterteri/rag-sql) &nbsp;|&nbsp; **[Read the eval methodology →](https://github.com/misterteri/rag-sql/blob/main/eval/RESULTS.md)**

## Other projects

- 🚧 **AI Visitor Kiosk** (`visitor-management-system`) — AI receptionist on NVIDIA Jetson: local STT/TTS/VLM, a LiteLLM-routed agent, QR check-in, host notification. *Private; clean-room public rebuild in progress.*

## Tech I work with

**Languages**
<br>
![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/-C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)

**AI / LLM**
<br>
![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Hugging Face](https://img.shields.io/badge/-Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![Ollama](https://img.shields.io/badge/-Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)
![LangChain](https://img.shields.io/badge/-LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![LangGraph](https://img.shields.io/badge/-LangGraph-2B6CB0?style=for-the-badge&logoColor=white)
![LlamaIndex](https://img.shields.io/badge/-LlamaIndex-6E56CF?style=for-the-badge&logoColor=white)
![Weaviate](https://img.shields.io/badge/-Weaviate-1D9A6C?style=for-the-badge&logoColor=white)
![LiteLLM](https://img.shields.io/badge/-LiteLLM-4B5563?style=for-the-badge&logoColor=white)
![Langfuse](https://img.shields.io/badge/-Langfuse-0E7C61?style=for-the-badge&logoColor=white)

**Infra / Backend**
<br>
![GCP Vertex AI](https://img.shields.io/badge/-GCP%20Vertex%20AI-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![FastAPI](https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

&nbsp;

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=misterteri&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&background=EFE7DC&ring=14555A&fire=C9683D&currStreakNum=24292D&currStreakLabel=14555A&sideNums=14555A&sideLabels=7C9A92&dates=7C9A92&stroke=14555A)](https://git.io/streak-stats)

![Marcelino's GitHub stats](https://github-readme-stats.vercel.app/api?username=misterteri&hide_border=true&bg_color=EFE7DC&title_color=14555A&icon_color=C9683D&text_color=24292D)
