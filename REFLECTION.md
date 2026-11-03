# Reflection Report: Shopping Cart System

## 1. Challenges Faced

The main challenge was refactoring the procedural implementation without changing its functionality. In the procedural version, all functions access and modify the same global cart variable. When moving to the Module Pattern, I had to reorganize the code so that the cart data remained private while all operations continued to work correctly. Understanding how closures allow functions to access private variables was also an important part of this exercise.

## 2. Benefits of the Design Pattern

Using the Module Pattern improved the organization and maintainability of the shopping cart. Instead of exposing the cart variable globally, the module keeps its data private and provides public methods for adding, viewing, removing, and clearing items. This reduces global scope pollution and prevents other parts of the application from directly modifying the cart data.

The implementation also groups related functions together, making the code easier to understand and maintain.

## 3. When to Choose Design Patterns

Procedural programming is suitable for small scripts and simple tasks where the logic is straightforward. However, as an application grows, managing shared data and functions can become more difficult.

I would choose a design pattern when an application requires better organization, encapsulation, and reusability. The Module Pattern is particularly useful when related functionality needs to be grouped together while keeping internal data protected.

Overall, this exercise demonstrated how the same functionality can be implemented using different programming approaches and how design patterns can improve code structure.
