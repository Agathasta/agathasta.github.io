def stock_picker (arr)
    profit = 0
    profit_new = 0
    pairs = []

    for i in (0...arr.length)
        for j in ((i + 1)...arr.length)
            if arr[i] < arr[j] 
                profit_new = arr[j] - arr[i]
            end
            if profit_new > profit
                profit = profit_new
                pairs = [i,j]
            end
        end
    end
    p profit
    p pairs
end

stock_picker([17,3,6,9,15,8,6,1,10])