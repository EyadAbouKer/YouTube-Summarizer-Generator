from flask import Flask, jsonify, request
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
CORS(app)

@app.route('/api/getURL', methods=['POST'])
def getURL():
    # try:
        URL = request.json
        received_URL = URL['URL']
        print(received_URL)
        return jsonify({"URL": received_URL}), 200
    # except TypeError:
    #     return jsonify({"error": "Bad request, JSON data is expected"}), 400
    # except KeyError:
    #     return jsonify({"error": "JSON data does not have 'URL' key"}), 400










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
    return dictionaryToString('_qIdC1N2qcQ' )


if __name__=="__main__":
    app.run(debug=True)