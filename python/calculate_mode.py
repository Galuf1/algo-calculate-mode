def calculate_mode(lista):
    freq = {}
    for i in lista:
        freq[i] = freq.get(i,0) +1
    # sortedfreq = {x:y for x,y in sorted(freq.items(), key=lambda item:item[1],reverse=True)}
    
    maxfreq = max(freq,key=freq.get)
    result = [i for i in freq if freq.get(i) == freq.get(maxfreq)]
    
    return result
    



