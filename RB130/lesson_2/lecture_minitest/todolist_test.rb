require 'simplecov'
SimpleCov.start

require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'todolist'

class TodoListTest < Minitest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_shift
    todo = @list.shift
    assert_equal(todo, @todo1)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    todo = @list.pop
    assert_equal(todo, @todo3)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_done?
    assert_equal(false, @list.done?)
  end

  def test_raises_Typeerror
    assert_raises(TypeError) { @list.add(1) }
    assert_raises(TypeError) { @list.add('hi') }
  end

  def test_shovel
    new_todo = Todo.new('Walk the Dog')
    @list << new_todo
    @todos << new_todo

    assert_equal(@todos, @list.to_a)
  end

  def test_alias
    new_todo = Todo.new('Walk the Dog')
    @list.add(new_todo)
    @todos << new_todo

    assert_equal(@todos, @list.to_a)
  end

  def test_item_at
    assert_raises(IndexError) { @list.item_at(100)}
    assert_equal(@list.item_at(0), @todo1)
    assert_equal(@list.item_at(1), @todo2)
  end

  def test_mark_done_at
    assert_raises(IndexError) { @list.mark_done_at(100)}
    @list.mark_done_at(1)
    assert_equal(false, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(false, @todo3.done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) { @list.mark_done_at(100)}
    @todo1.done!
    @todo2.done!
    @todo3.done!

    @list.mark_undone_at(1)

    assert_equal(true, @todo1.done?)
    assert_equal(false, @todo2.done?)
    assert_equal(true, @todo3.done?)
  end

  def test_done!
    @todo1.undone!
    @todo2.undone!
    @todo3.undone!

    @list.done!

    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(true, @todo3.done?)
    assert_equal(true, @list.done?)
  end

  def test_remove_at
    assert_raises(IndexError) { @list.remove_at(100)}

    @list.remove_at(1)
    assert_equal([@todo1, @todo3], @list.to_a)
  end

  def test_to_s
    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT
  
    assert_equal(output, @list.to_s)
  end

  def test_to_s_done
    @list.mark_done_at(0)

    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [X] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_s_all_done
    @list.mark_all_done

    output = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_each
    arr = []
    @list.each {|ele| arr << ele }

    assert_equal(arr, [@todo1, @todo2, @todo3])
  end

  def test_each_return
    assert_equal(@list, @list.each {|ele| ele })
  end

  def test_select
    @todo1.done!
    list = TodoList.new(@list.title)
    list.add(@todo1)
  
    assert_equal(list.title, @list.title)
    assert_equal(list.to_s, @list.select{ |todo| todo.done? }.to_s)
  end

  def test_last
    result = @list.last

    assert_equal(result, @todo3)
  end

  def test_find_by_title
    result = @list.find_by_title('Buy milk')

    assert_equal(result, @todo1)
  end

  def test_all_done 
    @list.done!
    result = @list.mark_all_done
    assert_equal(result, @list)
  end

  def test_all_not_done
    @list.done!

    @list.mark_undone_at(0)
    @list.mark_undone_at(2)

    result = TodoList.new(@list.title)
    result.add(@todo1)
    result.add(@todo3)

    assert_equal(result.all_not_done.to_a, @list.all_not_done.to_a)
  end

  def test_mark_done_title
    @list.mark_done('Go to gym')
    assert_equal(true, @todo3.done?)
  end

  def test_mark_all_undone
    result = TodoList.new(@list.title)
    result.add(@todo1)
    result.add(@todo2)
    result.add(@todo3)

    @list.mark_all_undone
    assert_equal(result.to_a, @list.to_a)
  end

  def test_all_done 
    @list.done!
  
    result = @list.all_done
  
    assert_equal(@list.to_a, result.to_a)
  end
end