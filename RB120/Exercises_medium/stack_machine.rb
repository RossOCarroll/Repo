class Minilang
  attr_reader :regester, :stack

  def initialize(comand)
    @stack = []
    @register = 0
    @comand = comand
  end

  def eval
    @comand.split.each do |token|
      if token =~ /\A[-+]?\d+\z/
        @register = token.to_i
      else
        case token
        when "PRINT" then puts @register
        when "PUSH" then push
        when "ADD" then add
        when "SUB" then sub
        when "MULT" then mult
        when "DIV" then div 
        when "MOD" then mod 
        when "POP" then pop_stack
        else 
          puts "Invalid token #{token}"
        end
      end
    end
  rescue EmptyStackError => e
    puts e.message
  end

  private 

  class EmptyStackError < StandardError ;end

  def push
    @stack.push(@register)
  end

  def add
    @register += pop_stack
  end

  def sub 
    @register -= pop_stack
  end

  def mult 
    @register *= pop_stack
  end

  def div 
    number = pop_stack
    raise ZeroDivisionError, "Division by zero!" if number == 0
    @register /= number
  end

  def mod 
    number = pop_stack
    raise ZeroDivisionError, "Division by zero!" if number == 0
    @register %= number
  end

  def pop_stack
    raise EmptyStackError, 'Empty Stack!' if @stack.empty?
    @stack.pop
  end

end


Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# # (nothing printed; no PRINT commands)
