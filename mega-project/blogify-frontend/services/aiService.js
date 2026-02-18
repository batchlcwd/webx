import openAIClient from "@/config/aiConfig";

export const generateUsingAI = async (title, description) => {
  console.log("Generating using ai");

  const prompt = `You are a senior content writer and subject-matter expert.

Write a **comprehensive, SEO-optimized blog post** based on the following inputs:

### Blog Title:
${title}

### Blog Description / Context:
${description}

---

## Content Requirements

Follow these instructions strictly:

### 1. Structure & Formatting
- Return the entire response in **Markdown (.md) format**
- Use clear headings ("##", "###", "####")
- Include bullet points, numbered lists, tables (if useful)
- Keep paragraphs readable (2–4 lines max)

### 2. Introduction
- Start with a strong hook (problem, question, or bold statement)
- Clearly explain **why this topic matters**
- Briefly outline what the reader will learn

### 3. Core Content (In-Depth)
- Explain concepts **step-by-step**
- Cover both **theory and practical application**
- Include:
  - Detailed explanations
  - Edge cases or common mistakes
  - Best practices and alternatives
- Use sub-sections to improve clarity

### 4. Examples
- Provide **simple examples** for beginners
- Provide **advanced or real-world examples**
- Use comparisons where helpful

### 5. Real-World Use Cases
- Explain how this topic is applied in:
  - Production environments
  - Businesses or real projects
  - Industry scenarios
- Mention tools, workflows, or patterns if relevant

### 6. Code (If Applicable)
- Include **clean, well-commented code blocks**
- Explain what the code does and why it’s written that way
- Use best practices
- If multiple languages are relevant, include them

### 7. SEO Optimization
- Naturally include:
  - Primary keyword (from title)
  - Related keywords and synonyms
- Add a section:
  - **"Key Takeaways"**
  - **"Frequently Asked Questions (FAQ)"** (3–5 questions)

### 8. Tone & Style
- Professional but friendly
- Clear, confident, and authoritative
- Avoid fluff and generic statements

### 9. Conclusion
- Summarize the main points
- Offer next steps or practical advice
- End with a thoughtful closing statement

---

## Output Rules
- Do NOT mention that you are an AI
- Do NOT include meta commentary
- Focus on accuracy, clarity, and usefulness
- Assume the reader wants **real value**, not surface-level content
`;
  const response = await openAIClient.responses.create({
    model: "gpt-5-mini",
    input: prompt,
  });

  return { response_text: response.output_text };
};
