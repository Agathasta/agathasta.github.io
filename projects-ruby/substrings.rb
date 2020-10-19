dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(sentence, dictionary)

    words = sentence.downcase.split(" ")
    result = Hash.new(0)

    words.each do |word|
        dictionary.each do |item|
            if word.include?(item)
                result[item] += 1
            end
        end
    end

return result
end

substrings("below", dictionary)
#=> {"below"=>1, "low"=>1}

substrings("Howdy partner, sit down! How's it going?", dictionary)
# => {"how"=>2, "howdy"=>1, "part"=>1, "partner"=>1, "it"=>2, "i"=>3, "sit"=>1, "down"=>1, "own"=>1, "go"=>1, "going"=>1}