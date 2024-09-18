# rubocop:disable all
=begin
Create a custom set type.

Sometimes it is necessary to define a custom data structure of some type, like a set. In this exercise you will
define your own set type. How it works internally doesn't matter, as long as it behaves like a set of unique
elements that can be manipulated in several well defined ways.

In some languages, including Ruby and JavaScript, there is a built-in Set type. For this problem, you're expected
to implement your own custom set type. Once you've reached a solution, feel free to play around with using the
built-in implementation of Set.

For simplicity, you may assume that all elements of a set must be numbers.

Promblem
  -a set only allows for unitque values
  -Values in a set can be stored in any order
  -All values must be numbers

test cases / Exsamples:

The test cases indicate that we need to write several instance methods for a class, CustomSet. We should be able to add elements to a set using the instance method add.

There are also some important terms to note:

A set, A, is a subset of another set, B, if all of the elements in A are also in set B.

{ 1, 2, 3 } is a subset of { 2, 4, 3, 1 }
{ 1, 2, 3 } is not a subset of { 1, 2 }
{ 1, 2, 3 } is not a subset of { 1, 2, 4, 5 }
Two sets, A and B, are said to be disjoint if none of the elements in set A are in set B. That also implies that none of the elements in B are in A.

{ 1, 2, 3 } and { 4, 5, 6 } are disjoint sets.
{ 1, 2, 3 } and { 4, 3, 6 } are not disjoint
Two sets are said to be equal if both sets contain the exact same elements.

{ 1, 2, 3 } and { 1, 2, 3 } are equal sets.
{ 1, 2, 3 } and { 3, 1, 2 } are also equal sets - the order does not matter.
{ 1, 2, 3 } and { 1, 2 } are not equal sets.
The intersection of two sets, A and B, is a new set that contains all of the elements that are in both A and B. That is, the intersection contains all of the shared elements.

The intersection of { 1, 2, 3 } and { 1, 3, 5 } is { 1, 3 }.
The intersection of { 1, 2, 3 } and { 4, 5, 6 } is the empty set: { }.
The union of two sets, A and B, is a new set that contains all of the elements that are in either A and B (and perhaps both).

The union of { 1, 2, 3 } and { 1, 3, 5 } is { 1, 2, 3, 4, 5 }.
The difference of two sets, A and B, is a new set that contains all of the elements of A that are not present in B.

The difference of { 1, 2, 3 } and { 1, 3, 5 } is { 2 }.
The difference of { 1, 5, 7 } and { 1, 2, 3 } is { 5, 7 }.
The difference of { 1, 2, 3 } and { 4, 5, 6 } is { 1, 2, 3 }.
The methods we need for our CustomSet revolve around the above terms:

a constructor method.
a method to return the intersection of the current set with another.
a method to return the union of the current set with another.
a method to return the difference between the current set and another.
a method that determines whether the current set and another are disjoint.
a method that determines whether the current set and another are equal.
a method that determines whether the current set is a subset of another.
a method that adds a new element to the current set.
a method that determines whether the current set contains a specific value.
a method that determines whether the current set is empty.

=end
# rubocop:enable all
class CustomSet
  def initialize(set= [])
    @set = set
  end

  def empty?
    @set.empty?
  end

  def include?(num)
    @set.include?(num)
  end

  def size
    @set.size
  end

  def sort
    @set.sort
  end

  def intersection(other_set)
    result = []
    @set.each do |num|
      result << num if other_set.include?(num)
    end
    CustomSet.new(result)
  end

  def union(other_set)
    result = @set + other_set.to_a
    CustomSet.new(result.uniq.sort)
  end

  def difference(other_set)
    result = []
    @set.each do |num|
      result << num if !other_set.include?(num)
    end
    CustomSet.new(result)
  end

  def disjoint?(other_set)
    diff_set = intersection(other_set)
    diff_set.empty?
  end

  def eql?(other_set)
    return false if @set.uniq.size != other_set.to_a.uniq.size
    @set.uniq.sort == other_set.to_a.uniq.sort
  end

  def to_a
    @set
  end

  def subset?(other_set)
    @set.all? { |num| other_set.include?(num) }
  end

  def add(num)
    @set << num if !@set.include?(num)
    self
  end

  def contains?(num)
    @set.include?(num)
  end

  def ==(other)
    return false unless other.is_a?(CustomSet)
    @set.sort == other.to_a.sort
  end
end

# set = CustomSet.new([1, 2, 3])
# p set.contains?(4)
