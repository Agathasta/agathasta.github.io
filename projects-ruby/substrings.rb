dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(str, dictionary)
    result = Hash.new(0)
    dictionary.each do |word|
        if str.include?(word)
            result[word] = dictionary.count(word)
        end
    end
return result
end

substrings("below", dictionary)