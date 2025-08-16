# Playbook Guide

## Playbook linting rules

- WARN: Title should be shorter than 35 characters
- WARN: Summary should be shorter than 105 characters
- MUST: Playbook should have a realistic time estimate for user execution when everything goes as planned
  on average. (Time to fix findings is not included in the estimate)
- MUST: Playbook audience should be personal, if it is designed for individual use (e.g. instead of a company)
- MUST: Playbook audience should be business if it is designed for organization's use
- MUST: Playbook serviceTier should be free if it can be executed with a free badrap.io account
- MUST: Playbook serviceTier should be automation if automation tier is needed and enough to execute.
- MUST: Playbook should be tagged as full service if full service tier is needed for the execution
- MUST: Playbooks should have an author.
- MUST: Playbooks should have an introduction which describes the (business or personal) risk the playbook is addressing.
  No need to sell, just help to align.
- MUST: Playbooks should have an introduction which briefly describes how the playbook addresses the problem.
- MUST: The introduction title should be "Introduction"
- MUST: Playbook should have Playbook.CompletionStep React component at the end of Playbook.Steps
- MUST: Playbook steps should clearly describe activities in that step
- MUST: Playbook step title should focus on the task. It should not focus on badrap.io -specific step
- MUST: Steps must be clearly scoped. There should not be two steps which address the same topic
- MUST: Account creation suggestions for unauthenticated users should describe why from the playbook perspective
- MUST: Step title should focus on describing the task user will execute
- MUST: Playbook should address how to fix potential issues
- MUST: Playbook should not have typos and grammatical errors
- WARN: Playbook step focuses too much on describing badrap-specific execution instead of giving badrap-agnostic
  advice on how to accomplish a task (Badrap perks and benefits can be mentioned, as long as the step starting point is general advice)
- WARN: When the playbook step discusses talking to experts or needing advice, it should have "Book a meeting" link similar to other playbooks
- MUST: Book a meeting explanation should describe a reason why the user would want to book the meeting
- MUST: Book a meeting explanation must be relevant to the specific step where it appears, not generic or referencing other steps' activities
- WARN: Book a meeting explanation should be at most 75 characters
- MUST: Explanation should not repeat "book a meeting" if it is already mentioned in the button
- WARN: the playbook structure should not deviate much from other playbooks. Consider both content and html/css
- WARN: Avoid excessive use of images. Only introduction section should have an image.
- WARN: Avoid suggesting "also do this" activities that are separate from the playbook's core objective.
  Each playbook step must directly contribute to achieving the playbook's core objective. Steps that feel like
  "nice to have" or "while you're at it" activities should be reconsidered. Training or educational steps must
  be scoped to the current task, not as general improvement opportunities. Service promotion should not drive step
  inclusion - steps must serve the task at hand
- MUST: If there is an app which automates the step, or part of the step, the app should be listed in that step.
- MUST: Use consistent terminology. For example if you talk about data breaches, don't switch to data leaks
  all of a sudden.

## badrap.io language guide

- Use active and casual tone
- Be positive
- Avoid marketing hype
- Avoid corporate jargon
- Use first person singular when it is obvious that a person is the actor:
  - Good: "I thought I'd inform you about..."
  - Bad: "We're informing you about..."
- Avoid using faceless organization as an actor.
  - Good: "We in Badrap believe that cyber security should be easy."
  - Bad: "Badrap believes that cyber security should be easy."
- You can use acronyms also when you are pointing to a specific technical object, such as a service or a protocol
- Avoid also other cybersecurity jargon in general, not just acronyms.
- Avoid military and war terminology when the topic is not related to military and war. Examples:
  - Instead of "Weaponization" use wording, such as "creating a way to exploit a vulnerability"
  - Instead of "Cyber Kill Chain" use wording, such as "steps that criminals take to break into a computer system"
- Playbooks are designed to make cyber security easy. Reflect that with the choice of words. Examples:
  - Bad: "share details with expert", better: "share the details you have easily available"
  - Bad: "get a comprehensive report with all the details", better: "get a concise report with the
    necessary details to fix the issues".
- Avoid long sentences. Sentences over 130 characters need to be very clear otherwise. Never go beyond 160 characters.

## Playbook design principles

### What they are

Playbooks:

- provide a step-by-step guide to help readers to complete cybersecurity tasks and goals
- help customers to achieve clearly defined bite-sized cyber security goals that can be
  achieved in a reasonable time
- enable cyber security self-service
- make tasks easier over time as many of them build on top of the common groundwork tasks
- are something people do periodically, or eventually
- are perfect for someone to explain to their manager (or parents) what should be
  done to improve cyber security
- are a source of delight: "you've now completed this playbook",
  "you have all these cyber security processes active as you have
  completed these playbooks".

### Why people like to execute playbooks on badrap.io platform

Playbooks on badrap.io make accomplishing the customer's goals easier because they:

- offer automation for the steps that can be automated
- provide easy ways to connect different pieces of automations for accomplishing a specific task
- provide easy ways to get help if customers get stuck on the task at hand
- give an easy access to a vast network of experts of different topics
- establish and support a repeatable process required by information security management systems,
  cyber security standards and regulation
- allow people to report upwards and to remind themselves about all the cyber security achievements
  and progress after they have engaged the playbook.
- executing tasks get even easier over time:
  - when steps are automated, many annual tasks turn into quick annual reviews
  - the groundwork steps are often shared between different playbooks. Completing a
    playbook can mean some of the steps in other playbooks are already done.
    E.g. "Now that you completed playbook X, five out of seven steps of playbook Y are already done

## More philosophical points of playbooks:

- They can also be something we or our partners mostly do as a service
- They can be something somebody else mostly does as a service

### Conversion opportunities

- If certain apps make sense for certain tasks then make adding them easy. For example, if certain asset types are relevant for the tasks then make claiming them easy with apps
- If some task requires manual work, offer an opportunity to outsource it (e.g. simply link to booking calendar for an expert service provider)
- If app or service requires paid subscription, still show their availability in context of the task at hand but offer the subscription to unlock them

## Instructions for AI reviewers

Categorize the checks to the following categories:

- Linting rules check:
  - Only evaluate compliance with the explicit MUST and WARN requirements listed in this guide
  - List the status for all rules under this section
- Language checks:
  - List issues that violate language guide section
  - List grammar & typo fixes
- Design principle check:
  - Check issues that might violate playbook design principles

Also follow these rules:

- Follow the category structure above when outputting results. Don't invent new subcategories. You may, however, include a summary of the findings at the end
- When looking at the source code, understand that some of the playbook metadata can be included from other files
- Be precise when listing violations. Make sure you refer to the exact part of the guide
- Don't confuse the sections. When the playbook violates linting rules, list the finding there and not under a wrong section, for example under design principle check in this case.
- Warn if the same requirement is covered by several sections in this guide. In that case you can list the violation under both matched categories.

Remember to check also these in language checks:

- When checking sentence lenght, remember that a period, exclamation mark and questionmark signifies the end of the sentence.
- When flagging a long sentence, display the original version and suggest new wording
- Spot misuse of the apostrophe. Flag if the text says for example "users" when the context looks like it should say "user's"
- Check for incorrect terminal punctuation marks at the end of sentences (periods, question marks, exclamation points)
  and flag any that don't match the sentence's intended meaning or grammatical structure
- When reviewing lists, ensure all items are punctuated consistently, whether with commas, semicolons, or no punctuation at all.
