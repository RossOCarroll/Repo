# rubocop:disable all
=begin 
Write a simple linked list implementation. The linked list is a fundamental data structure in computer science, 
often used in the implementation of other data structures.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" 
field pointing to the next element in the list of elements. This variant of linked lists is often used to 
represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a range of data such as the numbers 1-10. Provide 
methods to reverse the linked list and convert a linked list to and from an array.

Problem:
  -We will be making a singly linked list. This means that each element in the list does not need to have information
  about any other element in the lis except for the `next` element
  -Each element in the list contians data (a value) and a next field that points to the nextr element in the list
  of elements
  -The elements in our linked list may contian any data values
  -We'll need a method that reverses a linked list. as well as methods that convert a linked list to and from an 
  array
  -We will also write several helper methods

Test cases / Exsamples
  -Element class 
    -A constructor method that expects at least one argument. The first argument isd the data value to be stored in
    the newly created element. The second is a optional argument is a `Element` object that will be the `next` element
    in the newly created element
    -A method that returns the data value of the `Element`
    -A method that returns a boolean that indicated whether the current element is the tail of the list. the last
    last on in the list. the tail element does not have another `Element` instance stored in the next field
    -A method that returns the next `Element` in the linked list. If the current element is the tail we shoud return
    a value indicating the absense of the next element `nil`

  -SimpleLinkedList class
      -A class method that creates a new SimpleLinkedList instance from a given array argument
      -A class method that converts a SimpleLinkedList instance into an array. The data from each link in pur list
      should be an element in the return array
      -A method that adds its argument to the list
      -A method that removes the head of the list (most recent added)
      -a method that returns the element at the head of the list
      -A method that returns the size of the list
      -A method the returns a boolean depending on weather the lis is empty
      -A method that returns the data value of the head element
      -A method that returns the list but in reverse order.
=end
#rubocop:enable all

class Element
  attr_accessor :data, :next
  attr_reader :datum

  def initialize(data, next_ele = nil)
    @datum = data
    @next = next_ele
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_accessor :head

  def self.from_a(array)
    array = [] if array.nil?
    list = SimpleLinkedList.new

    array.reverse_each { |datum| list.push(datum) }
    list
  end

  def to_a
    array = []
    current_element = @head

    while current_element
      array << current_element.datum
      current_element = current_element.next
    end

    array
  end

  def push(datum)
    @head = Element.new(datum, @head)
  end

  def pop
    return nil if @head.nil?

    old_head = @head
    @head = old_head.next
    old_head.datum
  end

  def size
    size = 0
    current_element = @head

    while current_element
      size += 1
      current_element = current_element.next
    end
    size
  end

  def empty?
    @head.nil?
  end

  def peek
    @head&.datum  # Using safe navigation operator
  end

  def reverse
    result = SimpleLinkedList.new
    current_element = @head

    while current_element
      result.push(current_element.datum)
      current_element = current_element.next
    end

    result
  end
end
