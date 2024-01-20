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
        transcriptDictionaries = YouTubeTranscriptApi.get_transcript(received_URL)
        concatenated_names = ""
        for d in transcriptDictionaries:
            concatenated_names += d.get('text') + " "
        # concatenated_names = getURL()
        concatenated_names = concatenated_names.strip()
        return concatenated_names



if __name__=="__main__":
    app.run(debug=True)