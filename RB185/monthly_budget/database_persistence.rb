require 'pg'
require 'bcrypt'
require 'pry'


class DatabasePersistence
  def initialize(logger)
    @db = PG.connect(dbname: "expenses")
    @logger = logger
  end

  def query(statement, *params)
    @logger.info "#{statement} #{params}"
    @db.exec_params(statement, params)
  end

  def add_user(username, password)
    password_digest = BCrypt::Password.create(password)
    sql = "INSERT INTO users (username, password_digest) VALUES ($1, $2)"

    query(sql, username, password_digest)
  end

  def find_user(username)
    sql = "SELECT * FROM users WHERE username = $1"
    result = query(sql, username)

    result.first
  end

  def authenticate_user(username, password)
    user = find_user(username)
    
    if user && BCrypt::Password.new(user["password_digest"]) == password
      user 
    else 
      nil
    end
  end

  def display_expenses(user)
    sql = "SELECT * FROM expenses WHERE user_id = $1"

    result = query(sql, user)

    result.map do |tuple|
      {
        id: tuple["id"],
        name: tuple["name"],
        amount: tuple["amount"].to_f,
        category: tuple["category"],
        user_id: tuple["user_id"]
      }
    end
  end

  def get_income(user)
    sql = "SELECT monthly_income FROM users WHERE id = $1"
    result = query(sql, user)
    result.first["monthly_income"].to_f
  end

  def set_income(income, user)
    sql = "UPDATE users SET monthly_income = $1 WHERE id = $2"

    query(sql, income, user)
  end

  def add_expense(expense, user)
    name = expense[:name]
    amount = expense[:amount]
    category = expense[:category]

    sql = "INSERT INTO expenses (name, amount, category, user_id)
          VALUES ($1, $2, $3, $4)"
 
    query(sql, name, amount, category, user)
  end

  def find_expense(expense_id, user)
    sql = "SELECT * FROM expenses WHERE id = $1 AND user_id = $2"

    result = query(sql, expense_id, user)
    result.first
  end

  def update_expense(expense_id, expense_params)
    sql = "UPDATE expenses SET name = $1, amount = $2, category = $3 WHERE id = $4"

    name = expense_params[:name]
    amount = expense_params[:amount]
    category = expense_params[:category]

    query(sql, name, amount, category, expense_id)
  end

  def delete_expense(id, name)
    sql = "DELETE FROM expenses WHERE id = $1 AND name = $2"

    query(sql, id, name)
  end

end