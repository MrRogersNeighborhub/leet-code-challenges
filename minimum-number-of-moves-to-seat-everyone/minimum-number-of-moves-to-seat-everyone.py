class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        total = 0
        sortSeats = sorted(seats)
        sortStudents = sorted(students)
        for i in range(len(seats)):
          total += abs(sortSeats[i] - sortStudents[i])
        return total
        
        