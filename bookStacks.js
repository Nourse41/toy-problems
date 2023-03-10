/*
Problem Description

Someone gave you a large and unstable pile of books of size starting_height and you want to split them into shorter piles because they'll fall over if the piles are taller than a stable_height.

When you split a pile of books, you will split it into number_of_partitions even piles whenever possible. So the height of the resulting piles should differ by 1 book at most. You don't have to count piles of books that are empty. For example, if the starting_height is 6 books high and stable_height is 5 but your number_of_partitions is 7 then you'd split it into 6 piles of 1 book and one pile with zero books, which you wouldn't count.



Stop splitting when all the piles as short as stable_height or shorter. The final result is the number of piles after splitting.



The only line of input contains three integers:

   starting_height, stable_height,  number_of_partitions

These will all be ordinary numbers, that would make sense with real-life piles of books.

Don't spend any of your limited time checking these numbers.



Example 1:

input

13 3 2

output

5



Explanation - Pile Iterations:

13         (starting_height greater than stable_height, so attempt to split into 2 piles.)

7 6         (Both new piles exceed the stable_height, so split each of them.)

4 3 3 3     (Only the first pile exceeds the stable_height height, so split it.)

2 2 3 3 3     (At this point no pile exceed the stable_height.)



Example 2

input

3 2 5

output

3



Explanation - Pile Iterations:

3         (starting_height greater than stable_height, so attempt to split into 5 piles.)

1 1 1 0 0     (No pile exceeds stable height, but don’t count the empty piles.)

*/