from flask import Flask, jsonify, request
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
CORS(app)


@app.route('/api/getURL', methods=['GET', 'POST'])
def getURL():
        URL = request.json
        received_URL = URL['URL']
        
        # return jsonify({"URL": received_URL}), 200
        received_URL = str(received_URL) #turning the data to string
        finalURL =''
        finalfinalURL=''
        for i  in range(len(received_URL)):
            j = len(received_URL) -i-1
            if received_URL[j]=='/':
                finalURL = received_URL[j + 1:]
                break
        if 'watch?v=' in finalURL:
            finalURL= finalURL[8:]
        else:
            print(finalURL)
            finalURL = finalURL    
        transcriptDictionaries = YouTubeTranscriptApi.get_transcript(finalURL)
        concatenated_names = ""
        for d in transcriptDictionaries:
            concatenated_names += d.get('text') + " "
        # concatenated_names = getURL()
        concatenated_names = concatenated_names.strip() 
       
        return concatenated_names



if __name__=="__main__":
    app.run(debug=True)
    
    
    
    #    
        # for i in range(len(fullURL)):
        #     j = len(fullURL) - i-1
        #     if fullURL[j] == '/':
        #         finalURL=  fullURL[j + 1:]
        #         break
        #     print(finalURL)
        # if 'watch?v=' in finalURL:
        #     return finalURL[8:]
        #     print(finalURL)
        # else:
        #     print(finalURL)
        #     return finalURL
        