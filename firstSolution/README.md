### English

## Closest Common Relative Algorithm Summary

**Description:**
This JavaScript algorithm, `closestCommonRelative`, is designed to efficiently find the closest common relative (ancestor) of two specified values within a binary tree structure.

**Usage:**

-   **Input:** A binary tree structure, `root`, and two target values, `value_a` and `value_b`.
-   **Output:** The node representing the closest common relative, or `null` if none is found.

**Algorithm Overview:**

1. The algorithm employs a recursive approach using a helper function, `search`.
2. The `search` function examines the current node, its left subtree, and its right subtree to determine the closest common relative.
3. It checks if both target values are found in the left and right subtrees, which would make the current node the common relative.
4. The algorithm also evaluates if the current node matches one of the target values and if either target value is found in its subtrees, designating the current node as the common relative.
5. If the common relative is not found in the current node, it returns the closest common relative found in the left or right subtree.
6. If no common relative is found, it returns `null`.

**Example:**

-   In the provided example, the `closestCommonRelative` function is used to find the closest common relative of "Node P" and "Node O" in the binary tree structure. If a common relative is found, it is displayed; otherwise, it indicates that the relative was not found.

This algorithm is valuable for determining the relationship between two nodes in a binary tree and can be applied to various tree-related problems.

---

### Español

## Resumen del Algoritmo del Pariente Común más Cercano

**Descripción:**
Este algoritmo en JavaScript, `closestCommonRelative`, está diseñado para encontrar de manera eficiente el pariente común más cercano (ancestro) de dos valores especificados en una estructura de árbol binario.

**Uso:**

-   **Entrada:** Una estructura de árbol binario, `root`, y dos valores objetivos, `value_a` y `value_b`.
-   **Salida:** El nodo que representa el pariente común más cercano, o `null` si no se encuentra ninguno.

**Descripción del Algoritmo:**

1. El algoritmo utiliza un enfoque recursivo mediante una función auxiliar, `search`.
2. La función `search` examina el nodo actual, su subárbol izquierdo y su subárbol derecho para determinar el pariente común más cercano.
3. Comprueba si se encuentran ambos valores objetivos en los subárboles izquierdo y derecho, lo que haría que el nodo actual sea el pariente común.
4. El algoritmo también evalúa si el nodo actual coincide con uno de los valores objetivos y si alguno de los valores objetivos se encuentra en sus subárboles, designando al nodo actual como el pariente común.
5. Si no se encuentra el pariente común en el nodo actual, se devuelve el pariente común más cercano encontrado en el subárbol izquierdo o derecho.
6. Si no se encuentra ningún pariente común, se devuelve `null`.

**Ejemplo:**

-   En el ejemplo proporcionado, la función `closestCommonRelative` se utiliza para encontrar el pariente común más cercano de "Node P" y "Node O" en la estructura de árbol binario. Si se encuentra un pariente común, se muestra; de lo contrario, indica que no se encontró el pariente.

Este algoritmo es útil para determinar la relación entre dos nodos en un árbol binario y puede aplicarse a diversos problemas relacionados con árboles.
