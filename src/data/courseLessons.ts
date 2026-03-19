export interface CourseLessonSection {
  title: string;
  description?: string;
  bullets?: string[];
  numbered?: string[];
  note?: string;
}

export interface CourseLessonPrompt {
  title: string;
  description?: string;
  content: string;
  language?: string;
}

export interface CourseLesson {
  courseSlug: string;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  meetingUrl: string;
  meetingLabel: string;
  objectives: string[];
  tools: string[];
  actionItems: string[];
  sections: CourseLessonSection[];
  prompts: CourseLessonPrompt[];
  assignment: string[];
  nextUp?: string;
}

export const courseLessons: CourseLesson[] = [
  {
    courseSlug: "image-backwards-engineering",
    slug: "ai-jewelry-prompt-lab",
    title: "Prompt Lab: Jewelry Case Study",
    eyebrow: "Prompt Lab",
    summary:
      "A detailed Prompt Lab built from a live training session led by Andrea, using jewelry as the running case study while teaching a backwards-engineering workflow you can apply to any product, object, or visual subject.",
    meetingUrl:
      "https://www.notion.so/lilly-X-Andrea-328606ffb9f680d49fb1c9f0a5585b22?pvs=189#328606ffb9f680c9bb91e5ffe844be66",
    meetingLabel: "View source meeting summary and transcript",
    objectives: [
      "Understand backwards engineering as a reusable image system, not a one-off prompt trick.",
      "Turn strong reference images into structured prompt logic that image models can actually follow.",
      "Learn how to adapt the same process to your own subject while using jewelry as the working example.",
      "Build prompts that survive debugging and become durable business assets.",
    ],
    tools: [
      "ChatGPT for reference-image analysis and debugging",
      "Higgsfield for image generation and model access",
      "Nano Banana 2 and Nano Banana Pro for generation testing",
      "OpenAI Codex as a lower-cost alternative for technical experimentation",
      "Lovable for fast AI prototypes, especially interview or internal-tool concepts",
    ],
    actionItems: [
      "Choose one visual subject you care about and collect a small set of benchmark images that represent the look you want to recreate.",
      "Build multiple prompt families around different moods or use cases, instead of trying to force one prompt to do everything.",
      "Test each prompt across multiple examples of your subject until the output is usable and consistent.",
      "Document what has to stay fixed, what can vary, and what repeatedly breaks so your prompt system improves over time.",
    ],
    sections: [
      {
        title: "Session Context",
        description:
          "This Prompt Lab is built from a live training session where Andrea taught a backwards-engineering method for turning strong reference images into reusable prompt systems.",
        bullets: [
          "Jewelry was used as the case study because it demands precision, product preservation, styling restraint, and strong visual hierarchy.",
          "The underlying method is broader than jewelry and can be adapted to furniture, fashion, food, beauty, packaging, interiors, or any other visual subject.",
          "The purpose of the lesson is to help you learn the system underneath the case study, not just copy the final examples.",
        ],
      },
      {
        title: "Why This Matters: Replace a Photoshoot with a Prompt",
        description:
          "The big idea is simple: instead of paying for a photographer, art direction, styling, retouching, and repeated reshoots every time you need new content, you build a prompt system that replaces as much of that setup as possible. A strong prompt is not just text. It is a compressed production system.",
        bullets: [
          "A reference image gives you the target.",
          "Backwards engineering tells you what is actually creating the effect.",
          "The prompt becomes the reusable asset that can reproduce that effect again and again.",
          "A well-built prompt can save thousands of dollars in production by acting like a reusable photo shoot blueprint.",
        ],
        note:
          "Critical lesson: image models always drift toward the path of least resistance. Without structure, they give you safe, generic, plasticky outputs. The prompt exists to force quality, tension, and specificity back into the image.",
      },
      {
        title: "Prompt Lab Method",
        description:
          "This lesson should be used like a lab. First learn the method through the jewelry case study. Then swap jewelry for your own subject while keeping the structure the same.",
        bullets: [
          "Use the jewelry example to understand preservation, hierarchy, and variation.",
          "Replace the subject with your own product or content type only after the structure is clear.",
          "Do not start by writing a huge prompt from scratch. Start by analyzing a strong image and extracting what actually matters.",
          "Treat every working prompt as a reusable business asset.",
        ],
      },
      {
        title: "The Backwards Engineering Workflow",
        description:
          "The workflow starts with a strong image found on Pinterest or another benchmark source, then uses ChatGPT to analyze the image in a strict framework so the prompt is built from categories instead of vague descriptive text.",
        numbered: [
          "Collect a high-quality reference image that matches the type of brand imagery you want to recreate.",
          "Feed the image to ChatGPT with the backwards engineering prompt so it breaks the image into categories like camera, lighting, subject, imperfections, atmosphere, technical rendering, and narrative.",
          "Request the output in JSON because AI image models respond better to categorical structure than to oversized paragraphs.",
          "Tighten the output and remove redundant language so the prompt stays high-signal. Long prompts often perform worse because models stop paying attention.",
          "Move the structured prompt into Higgsfield and test it against the subject you care about. In this lesson, the subject is jewelry.",
          "Use the debugging loop to compare the reference, the uploaded asset, and the generated image until the system becomes reliable.",
        ],
      },
      {
        title: "Framework Breakdown",
        description:
          "The categories matter because they force you to describe what is truly driving the look instead of what is merely present in the image.",
        bullets: [
          "Camera logic: shot type, framing, lens feel, depth of field, and perspective.",
          "Lighting logic: direction, contrast, color cast, reflections, bloom, light leaks, and exposure problems.",
          "Subject and styling: gesture, posture, wardrobe category, object types, and only the environmental details that change composition.",
          "Analog and film imperfections: grain, halation, chromatic aberration, softness, edge distortion, motion blur, and other realism cues.",
          "Atmosphere and vibe layer: the emotional read of the image, including tension between polished and raw or composed and candid.",
          "Technical rendering: how detailed, tactile, and sharp the image should feel without slipping into artificial hyperrealism.",
          "Narrative hook: one cinematic sentence that gives the image a sense of moment and memory.",
        ],
      },
      {
        title: "Jewelry Case Study: Why This Example Was Chosen",
        description:
          "Jewelry is a powerful teaching example because it exposes almost every weakness in an image system. Small distortions are obvious. Product identity matters. Styling can easily overpower the hero item. Focus, cropping, and body placement all need to be precise. If you can build a strong prompt system for jewelry, you can apply the same logic to easier categories later.",
        bullets: [
          "The business problem in the case study was clear: replace placeholder or borrowed-looking imagery with proprietary visuals that feel elevated and brand-consistent.",
          "The references discussed in the session pointed toward editorial jewelry imagery with strong atmosphere, realism, and taste.",
          "The case study helps because jewelry forces you to think about preservation, hierarchy, styling discipline, and subject-specific framing.",
          "Once you understand the method through jewelry, you can swap in your own subject and keep the same operating structure.",
        ],
      },
      {
        title: "Modifications for the Jewelry Case Study",
        description:
          "The original backwards engineering framework is strong, but it is still generic. The jewelry case study shows how to customize the framework for a real use case. The point is not to memorize jewelry rules forever. The point is to learn how to translate a general framework into subject-specific instructions.",
        numbered: [
          "Treat the uploaded jewelry image as the hero asset. The prompt must preserve the product instead of letting the model casually redesign it.",
          "Allow one to two complementary jewelry pieces only if they make the image more aspirational without stealing attention from the hero item.",
          "Tie the composition to the product category: rings on hands, necklaces on necklines, bracelets on wrists, earrings around ears and jaw framing. The body-part logic teaches you how to keep the subject of the image obvious.",
          "Do not hard-code image size or aspect ratio inside the prompt. That decision belongs to the generation platform.",
          "Add explicit model-direction rules so every image stays in the same aesthetic world. In the jewelry case study, that meant editorial energy, real skin, controlled expression, and hair that supports the accessory instead of competing with it.",
          "Vary clothing, surfaces, backgrounds, and framing by category so the system creates many distinct images that still feel related. This is how one prompt family starts acting like many different photo shoots.",
        ],
        note:
          "How to generalize this: whatever your subject is, ask the same questions. What must be preserved? What can be added? What body zone or crop matters most? What kind of variation keeps the outputs fresh without breaking the visual world?",
      },
      {
        title: "Technical Setup and Model Choices",
        description:
          "The class used Higgsfield because it gives quick access to multiple image models, and ChatGPT because its image-reading ability was described as especially strong for this kind of visual analysis and debugging.",
        bullets: [
          "Higgsfield is the generation interface.",
          "Nano Banana 2 is faster but can lean plasticky.",
          "Nano Banana Pro is slower but more realistic.",
          "ChatGPT is preferred for analysis and debugging because it reads visual nuance well.",
          "OpenAI Codex can serve as a practical backup interface when heavier tool-building or coding work makes Lovable too expensive.",
          "Lovable remains useful when the goal is to prototype a quick AI tool or product concept rather than to build a large system.",
        ],
      },
      {
        title: "Debugging Loop",
        description:
          "The prompt is not finished the moment it produces a decent image. It only becomes valuable once it survives debugging across multiple products and aesthetic situations.",
        numbered: [
          "Generate the first image from the structured prompt.",
          "Compare the output against both the original reference image and the uploaded jewelry product image.",
          "Identify where the model failed: product distortion, weak pose, over-polished skin, wrong styling energy, poor background choice, or loss of blur hierarchy.",
          "Feed the generated image back into ChatGPT together with the original reference and the uploaded product image.",
          "Describe what was wrong, what needs to be preserved, and what should move closer to the original concept.",
          "Request a revised prompt and test again.",
          "Repeat until the prompt holds up across different jewelry pieces, not just the first test item.",
        ],
        note:
          "The class emphasized that this iteration stage is normal. Prompt quality improves through debugging, not through a single perfect first draft.",
      },
      {
        title: "Case Study Example",
        description:
          "In the source session, jewelry was the case study because the business needed proprietary visual assets that could replace mock or placeholder imagery. The benchmarks included high-end jewelry and fashion references with stronger taste, realism, and visual authority.",
        bullets: [
          "The references discussed included Gurjana, Spinelli, and Jacquemus-level jewelry imagery.",
          "The objective was to build an owned image system rather than depend on reference imagery forever.",
          "The same prompt system can later feed website assets, product storytelling, email, campaigns, and social content.",
          "The case study is useful because it shows how a prompt can move from inspiration to production-level asset.",
        ],
      },
      {
        title: "Career Tip: Use AI to Stand Out Early",
        description:
          "A valuable side lesson from the session was about job applications. Andrea suggested building something with AI instead of sending a generic follow-up. That advice is especially useful for students, recent grads, and anyone early in their career who wants to prove taste, initiative, and execution instead of only describing those qualities.",
        bullets: [
          "Use Lovable to build a lightweight website-analysis tool that checks whether a site is readable and useful for AI systems.",
          "Have the tool recommend structured-data improvements or content architecture changes.",
          "Keep the prototype fast and small. The point is not to build a company-sized product. The point is to demonstrate creativity and fluency.",
          "The same principle applies to prompt work: showing a working system is more persuasive than saying you understand AI.",
        ],
      },
      {
        title: "Build Assignment for This Week",
        description:
          "This session ended with a practical assignment: turn the framework into multiple prompt families that work for your own subject. Jewelry was the running example, but the assignment should be adapted to whatever visual system you are building.",
        numbered: [
          "Create prompt families for multiple categories or moods instead of one prompt that tries to cover everything.",
          "Use jewelry as your starting template if helpful: blurred-model shots, fashion-forward looks, vintage ad moods, casual settings, and relaxed environments.",
          "Generalize each concept so the system can produce many images within the same category instead of recreating one exact scene.",
          "Test each prompt against multiple examples of the subject you care about.",
          "Keep the prompts concise enough that the model keeps reading the full instruction.",
          "Store every working prompt as a permanent asset so the business keeps compounding what it learns.",
        ],
      },
    ],
    prompts: [
      {
        title: "OHNEIS Backwards Engineering Prompt",
        description:
          "Use this to analyze a reference image and reconstruct the visual logic in a model-friendly structure.",
        language: "text",
        content: `Analyze the image and reconstruct a cinematic prompt using the OHNEIS framework.
Keep it concise and high-signal. Only include elements that materially impact the visual outcome.
Return structured JSON with these sections in this exact order:
camera_logic, lighting_logic, subject_and_styling, analog_and_film_imperfections, atmosphere_vibe_layer, technical_rendering, narrative_hook.

1. CAMERA LOGIC
Define how the image is captured:
- shot type, framing, format
- lens feel and depth of field
- perspective and camera stability

2. LIGHTING LOGIC (PRIORITY)
Define:
- light source and quality
- direction and contrast
- color cast
- imperfections: lens flare, blown highlights, reflections, light leaks, uneven exposure

3. SUBJECT & STYLING
Describe:
- subject and gesture (natural, mid-action)
- wardrobe and objects using category-level terms (not specific brands/items)
- environment only if it affects composition

4. ANALOG & FILM IMPERFECTIONS (CRITICAL)
Extract physical flaws:
- grain, chromatic aberration, halation, motion blur, softness
- highlight bloom, color shift, edge distortion
Avoid clean/perfect language. Realism comes from imperfection.

5. ATMOSPHERE / VIBE
Summarize:
- emotional tone
- aesthetic style
- tension (for example polished vs raw, composed vs candid)

6. TECHNICAL RENDERING
Define briefly:
- resolution feel (high-detail, not hyperreal)
- grain presence
- sharpness falloff and tactile rendering

7. NARRATIVE HOOK
End with one cinematic sentence describing the moment as if it were a still from a film.

Constraints:
- Keep output tight and readable
- No redundancy
- No hyperrealism language
- Prefer categories over specifics
- Prioritize lighting and imperfections over everything else`,
      },
      {
        title: "Step 2 Adaptation Brief for the Jewelry Case Study",
        description:
          "Use this when converting the backwards-engineered output into a jewelry-ready generation prompt. Then adapt the same logic to your own subject.",
        language: "text",
        content: `These are the changes the base prompt needs so it becomes useful for the jewelry case study:

1. Uploaded product preservation
- The jewelry items in the image must come from the uploaded product images.
- Add explicit enforcement lines such as:
  - do not change the uploaded jewelry
  - do not modify the uploaded product image characteristics
  - do not reinterpret stone shape, scale, silhouette, or metal identity
- Allow one to two complementary jewelry pieces only when they elevate the image without overpowering the hero item.

2. Body-part focus logic
- Rings should prioritize hands.
- Necklaces should prioritize the neck, collarbone, and jaw framing.
- Bracelets should prioritize wrists and forearms.
- Earrings should prioritize ear, jawline, and surrounding face framing.
- The rest of the image can fall softly out of focus so attention stays on the relevant product zone.

3. Variation rules
- Every image should feel like a different photo shoot while remaining in the same aesthetic world.
- Rotate categories of clothing and backgrounds so the system does not repeat the same styling every time.
- Preserve the same editorial taste level but vary location, surface, posture, and composition.

4. Platform rule
- Do not define image size or aspect ratio inside the prompt. That should be chosen inside the image-generation platform.

5. Model rule
- Add a clear model-direction block so the visual world remains coherent across generations.

To generalize beyond jewelry:
- swap the hero product logic for whatever subject you are protecting
- define the crop or body zone that matters most
- define what can vary and what must stay fixed
- preserve the same method even when the subject changes`,
      },
      {
        title: "Variation and Model JSON",
        description:
          "These blocks were used to preserve consistency while avoiding repetitive outputs in the jewelry case study. Reuse the structure even if you swap the subject later.",
        language: "json",
        content: `{
  "scene_variation": "each image must feel like a different photoshoot by varying location, surfaces, and composition while staying within the same aesthetic world (Mediterranean, warm minimal, textural realism)",
  "clothing_variation": "use rotating categories of garments (knits, tailoring, silk shirts, outerwear) within the same neutral palette and oversized drape to ensure diversity without breaking brand coherence",
  "background_variation": "select from a range of natural and architectural backdrops (stone, marble, linen, concrete, wood, street fragments) with subtle differences in light, wear, and texture to avoid repetition",
  "model": {
    "generation": "always unique, never copied from references",
    "aesthetic": "editorial, quiet luxury, non-performative",
    "face": "strong bone structure, defined jaw, high cheekbones, clean brows",
    "expression": "neutral, calm, slightly parted lips, never smiling",
    "skin": "real, dewy, visible pores, sun-touched tones (olive to deep mahogany), minimal makeup",
    "hair": {
      "style": "natural texture (waves, curls, undone, swept)",
      "color": "natural tones only",
      "rule": "must serve the jewelry (clear ear, frame necklace, support accessory)"
    }
  }
}`,
      },
    ],
    assignment: [
      "Create multiple prompt families from the Pinterest board instead of one prompt that tries to do everything.",
      "Test on multiple product categories so the system works for rings, necklaces, bracelets, and mixed-styling scenes.",
      "Document what breaks first: product fidelity, pose quality, model styling, blur hierarchy, or realism.",
      "Bring the strongest prompts forward into the next lesson so the generated images can feed email and broader content production.",
    ],
    nextUp:
      "Next lesson: turn the generated image system into emails and broader content outputs that feel native to the brand or project you are building.",
  },
];

export const getLessonsForCourse = (courseSlug: string) =>
  courseLessons.filter((lesson) => lesson.courseSlug === courseSlug);

export const getLessonByCourseAndSlug = (courseSlug: string, lessonSlug: string) =>
  courseLessons.find(
    (lesson) => lesson.courseSlug === courseSlug && lesson.slug === lessonSlug
  );
