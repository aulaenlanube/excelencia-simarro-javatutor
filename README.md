# JavaTutor IA 🤖📚



[![Estado](https://img.shields.io/badge/Estado-Desarrollo-yellow)]()
[![Release](https://img.shields.io/badge/Release-v0.0.1-blue)]()
[![License](https://img.shields.io/badge/License-Apache--2.0-green)]()
[![Arquitectura](https://img.shields.io/badge/Arquitectura-Blackwell-black?logo=nvidia)]()

**JavaTutor IA** es un asistente pedagógico inteligente diseñado específicamente para los ciclos de Desarrollo de Aplicaciones (DAM/DAW) del **IES Dr. Lluís Simarro**. A diferencia de otros asistentes genéricos, JavaTutor está entrenado con el "pedagogía alineada", enfocándose en guiar al alumno mediante el razonamiento socrático en lugar de simplemente entregar la solución final.

![Preview](web/edificio-simarro.webp)

---

## 🌟 Pilares Estratégicos

### 1. Soberanía del Dato (On-Premise)
A diferencia de alternativas comerciales, **JavaTutor IA** se ejecuta 100% en infraestructura local. Ningún código de alumno ni material docente sale del centro, garantizando el cumplimiento estricto del **RGPD**.

### 2. Metodología Socrática Digital
El modelo no ha sido entrenado para resolver problemas, sino para **explicarlos**. Implementa un sistema de *Chain-of-Thought* (CoT) que evalúa si el error es sintáctico o lógico y ofrece pistas progresivas para fomentar el aprendizaje autónomo.

### 3. Integración Nativa en el IDE
El asistente vive donde vive el estudiante: en **Visual Studio Code**. Una experiencia fluida sin cambios de contexto ni fricción cognitiva.

---

## 🏗️ Arquitectura de Hardware Híbrida

El proyecto se sustenta sobre un ecosistema de hardware bifurcado de última generación:

### 🪐 Nodo TITÁN (Entrenamiento)
*   **CPU:** AMD Threadripper PRO 9995WX (96 Cores / 192 Threads).
*   **GPU:** 4x NVIDIA RTX PRO 6000 Arquitectura Blackwell (384GB VRAM total).
*   **RAM:** 1024 GB DDR5 ECC (Octa-channel).
*   **Almacenamiento:** 32 TB Gen5 NVMe en configuración RAID.

### ⚡ Nodo SPARK (Inferencia)
*   **Plataforma:** NVIDIA DGX SPARK.
*   **Capacidad:** Inferencia de baja latencia con throughput estimado de ~140 tok/s.
*   **Interconexión:** NVLink Bridge (200GB/s) para un pool de VRAM unificado de 256GB.

---

## 📊 Ingeniería del Corpus Multimodal

Transformamos el legado docente del IES Simarro en un dataset de alta fidelidad:

| Fuente | Procesamiento | Tecnología |
| :--- | :--- | :--- |
| **Video Clases** | Transcripción + Extracción de Código | Whisper V3 + OCR Visual |
| **Documentación** | Ingesta Semántica de PDF/PPTX | IBM Docling |
| **Exámenes** | Síntesis de pares Q&A | Generación Progresiva CoT |
| **Proyectos** | Minería de errores comunes | Análisis Estático (Linter) |

---

## 🧠 Fine-Tuning y Optimización

Implementamos técnicas de vanguardia para garantizar un modelo eficiente y preciso:

- **Arquitectura:** Basada en la familia **Qwen3-Coder** (escalas de 1B, 7B y 30B).
- **Entrenamiento:** **QLoRA** (PEFT) con rango (r=64) y alpha (32).
- **Cuantización:** Pesos optimizados a **4-bit NF4** para inferencia instantánea.
- **Validación:** Benchmarking continuo con **HumanEval** y exámenes históricos del centro.

---

## 🚀 Hoja de Ruta 2026

1.  **Q1 2026 - Fase de Ingesta:** Curación masiva del dataset, anonimización PII y generación sintética.
2.  **Q2-Q3 2026 - Fase de Tuning:** Ciclos de entrenamiento intensivo en Nodo Titán y validación pedagógica.
3.  **Q4 2026 - Fase Piloto:** Despliegue en aula, integración VS Code y monitorización de KPIs de rendimiento.


---
*Desarrollado con ❤️ para la comunidad docente del IES Simarro.*
