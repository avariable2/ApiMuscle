# ApiMuscle

![Logo ApiMuscle](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Emoji_u1f4aa.svg/768px-Emoji_u1f4aa.svg.png)

## About the Project

This API was designed to provide easy, structured access to a large collection of strength-training exercises. Each exercise is categorized and accessible through various endpoints, allowing users to search for and retrieve specific information according to their needs.

---

## Features

- **Category-Based Access**  
  - Search for exercises by muscle group (e.g., arms, legs, back)
- **Exercise Details**  
  - Detailed instructions, targeted muscles, and execution tips for each exercise
- **Filtering and Search**  
  - Filter exercises by difficulty level or required equipment

---

## Usage Examples

- **Get all exercises**  
  ```http
  GET /api/exercises

- **Search by name**

  ```http
  GET /api/exercises?name=[ExerciseName]
  ```
* **Filter by category**

  ```http
  GET /api/exercises/category/[CategoryName]
  ```

---

## License

Distributed under the MIT License. See the `LICENSE` file for details.
