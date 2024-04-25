class BankAccount
  #attr_reader :balance

  def initialize(starting_balance)
    @balance =  starting_balance
  end

  def positive_balance?
    balance >= 0
  end
end

acct = BankAccount.new(5)
puts acct.positive_balance?

#This will work when balance is referenced in the positive balance method defition because 
#Of the getter method attr_reader. This will return the @balance when referenced in the 
#positive_balance method.