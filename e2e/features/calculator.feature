# Tests e2e pour calculator
Feature: Calculatrice depuis le web

    Scenario: Affichage initial
        Given l'application est active
        Then l'expression est vide
        And l'affichage montre "0"

    Scenario Outline: Addition avec plusieurs cas
        Given l'application est active
        When je saisis "<premierNombre>"
        And je clique sur "+"
        And je saisis "<deuxiemeNombre>"
        And je clique sur "="
        Then l'affichage montre "<resultat>"

        Examples:
            | premierNombre | deuxiemeNombre | resultat |
            | 1             | 2              | 3        |
            | 3             | 4              | 7        |
            | 8             | 9              | 17       |
            | 12            | 9              | 21       |
            | 15            | 27             | 42       |
