from flask import Flask, jsonify, request
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi

#next step is to implement a function that takes the URL and extract the version
#URLs to be handeled: https://www.youtube.com/watch?v=LL2xYFZ7-6s (total 32 char) and https://youtu.be/LL2xYFZ7-6s?si=-wL8SfQH0Az2JF_5
#shorts: https://www.youtube.com/shorts/NELdJLUGVPA and https://youtube.com/shorts/NELdJLUGVPA?si=B7eW8JJAowPsPyY8
#live: https://www.youtube.com/live/JSsputiQCPA?si=jVha5whsvCWGzgKL --> NOTE: CHECK IF GETTING TRANSCRIPT FROM LIVE VIDEO WOULD BE POSSIBLE

app = Flask(__name__)
CORS(app)



def URLModifier(fullURL):
    finalURL =''
    for i in range(len(fullURL)):
        j = len(fullURL) - i-1
        if fullURL[j] == '/':
           finalURL=  fullURL[j + 1:]
           break
    if 'watch?v=' in finalURL:
        return finalURL[8:]
    else:
        return finalURL


@app.route('/api/getURL', methods=['GET', 'POST'])
def getURL():
        URL = request.json
        received_URL = URL['URL']
        # return jsonify({"URL": received_URL}), 200
        received_URL = str(received_URL) #turning the data to string
        print(received_URL)
        return received_URL


def dictionaryToString(VideoURL):
    transcriptDictionaries = YouTubeTranscriptApi.get_transcript(VideoURL) 
    concatenated_names = ""
    for d in transcriptDictionaries:
        concatenated_names += d.get('text') + " "
    # concatenated_names = getURL()
    concatenated_names = concatenated_names.strip()
    return { 'test' : concatenated_names}

@app.route('/api/route')
def predict():
    # return {'test': "what is your name"}
    # return dictionaryToString(getURL() )
    temp = getURL() #get the URL from React
    ytVersion = URLModifier(temp) # modify the URL to give us only the version
    print(ytVersion) #print result 
    return dictionaryToString(ytVersion) #return transcript


if __name__=="__main__":
    app.run(debug=True)