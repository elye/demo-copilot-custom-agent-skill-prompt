## Agent Features Demo

This repository also demonstrates advanced agent coding concepts:

Each feature is illustrated with similar content but used in different agent coding scenarios to show their flexibility and distinct usage.

- **Copilot Instructions**: Provides step-by-step guidance for setting up and running the project, ensuring a smooth onboarding experience for developers. These instructions can be customized to fit different project requirements or workflows.
   - Copilot Instructions: Follow the step-by-step guide in `.github/copilot-instructions.md` to set up and run the project. 	[Copilot Instructions](.github/copilot-instructions.md)

- **Custom Agent**: Implements a specialized agent for handling calculator-related tasks, allowing for extensible and modular automation. Custom agents can be tailored to specific workflows or domains.
   - Custom Agent: Extend or modify agent logic for calculator operations or other tasks.  
	[Custom Agent Example](.github/agents/prompt-enhancer.agent.md)

- **Agent Skill**: Encapsulates reusable logic or enhancements (such as prompt expansion) that agents can leverage. Skills are modular and can be applied to different agents for consistent behavior.
   - Agent Skill: Enhance prompts or add reusable logic for agents to use.  
	[Prompt-Enhancer Skill](.github/skills/prompt-enhancer/SKILL.md)

- **Custom Prompt File**: Stores prompt templates or instructions that guide agent behavior. These files allow for easy customization and adaptation of agent responses or actions.

   - Custom Prompt File: Edit prompt templates to change agent instructions or responses.  
	[Prompt File Example](.github/prompts/prompt-enhancer.prompt.md)



---

## Sample Application: Simple Web Calculator


A modern, clean web calculator built with HTML, CSS, and JavaScript. Now supports both basic arithmetic and scientific operations: trigonometric, logarithmic, exponential, powers, roots, constants, factorial, and more.

## Usage

1. Open `index.html` in your web browser.
2. Use the calculator interface to perform calculations.


## Features
- Responsive and clean UI
- Keyboard and mouse input support (mouse only by default)
- Handles basic arithmetic operations
- Scientific functions: sin, cos, tan, log, ln, exp, powers (^), roots (√), factorial (n!), π, e, parentheses
- Error handling for invalid operations (e.g., division by zero, sqrt of negative, log(0), etc.)

## Project Structure
- `index.html` – Main HTML file
- `style.css` – Calculator styling
- `main.js` – Calculator logic

---

## Scientific Usage Examples

- `sin(30)` — Sine of 30 radians
- `log(100)` — Base-10 logarithm of 100
- `ln(2.718)` — Natural logarithm
- `exp(1)` — e^1
- `2^8` — 2 to the power of 8
- `√(16)` — Square root of 16
- `5!` — Factorial of 5
- `π` — Pi constant
- `e` — Euler's number
- Parentheses for grouping: `sin(π/2)`, `log(10)+5`

Feel free to customize the UI or extend the functionality!
