require 'minitest/autorun'

require_relative 'text'

class TextTest < Minitest::Test 
  def setup
    @file = File.open('sample.txt', 'r')
  end

  def test_swap
    text = Text.new(@file.read)
    actual_text = text.swap('a', 'e')
    expected_text = <<~TEXT.chomp
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    TEXT

    assert_equal actual_text, expected_text
  end

  def test_word_count
    text = Text.new(@file.read)
    expected_count = 72
    actual_count = text.word_count

    assert_equal expected_count, actual_count

  end

  def teardown
    @file.close
    puts "File has been closed: #{@file.closed?}"
  end
end