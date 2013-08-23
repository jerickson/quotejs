var quotes = [
{
    author: "Herman Melville", text: "Call me Ishmael."
},
{
    author: "Ralph Waldo Emerson", text: "Speak your latent conviction and it will be the universal sense."
},
{
    author: "Marcel Proust", text: "A little tap on the window-pane, as though something had struck it, followed by a plentiful light falling sound, as of grains of sand being sprinkled from a window overhead, gradually spreading, intensifying, acquiring a regular rhythm, becoming fluid, sonorous, musical, immeasurable, universal: it was rain."
},
{
      "text": "She was one of those servants who, in a household, seem least satisfactory at first to a stranger, doubtless because they take no pains to make a conquest of him and show him no special attention, knowing very well that they have no real need of him, that he will cease to be invited to the house sooner than they will be dismissed from it, but who, on the other hand, are most prized by masters and mistresses who have tested and proved their real capacity, and care nothing for that superficial affability, that servile chit-chat which may impress a stranger favorably, but often conceals an incurable incompetence.",
},
{
      "text": "Perhaps the immobility of the things that surround us is forced upon them by our conviction that they are themselves and not anything else, by the immobility of our conception of them.",
},
{
      "text": "Sometimes, too, as Eve was created from a rib of Adam, a woman would be born during my sleep from some misplacing of my thigh.  Conceived from the pleasure I was on the point of enjoying, she it was, I imagined, who offered me that pleasure.  My body, conscious that its own warmth was permeating hers, would strive to become one with her, and I would awake.  The rest of humanity seemed very remote in comparison with this woman whose company I had left but a moment ago; my cheek was still warm from her kiss, my body ached beneath the weight of hers.  If, as would sometimes happen, she had the features of some woman whom I had known in waking hours, I would abandon myself altogether to this end: to find her again, like people who set out on a journey to see with their eyes some city of their desire, and imagine that one can taste in reality what has charmed one's fancy.  And then, gradually, the memory of her would fade away, I had forgotten the girl of my dream.",
},
{
      "text": "I could hear the whistling of trains, which, now nearer and now further off, punctuating the distance like the note of a bird in a forest, showed me in perspective the deserted countryside through which a traveller is hurrying towards the nearby station; and the path he is taking will be engraved in his memory by the excitement induced by strange surroundings, by unaccustomed activities, by the conversation he has had and the farewells exchanged beneath an unfamiliar lamp that still echo in his ears amid the silence of the night, and by the happy prospect of being home again.",
},
{
      "text": "All visible objects, man, are but as pasteboard masks. But in each event--in the living act, the undoubted deed--there, some unknown but still reasoning thing puts forth the mouldings of its features from behind the unreasoning mask. If man will strike, strike through the mask! How can the prisoner reach outside except by thrusting through the wall? To me, the white whale is that wall, shoved near to me. Sometimes I think there's naught beyond. But 'tis enough. He tasks me; he heaps me; I see in him outrageous strength, with an inscrutable malice sinewing it. That inscrutable thing is chiefly what I hate; and be the white whale agent, or be the white whale principal, I will wreak that hate upon him.",
},
{
      "text": "I returned, and saw under the sun, that the race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.",
},
{
      "text": "In this pleasing, contrite wood-life which God allows me, let me record day by day my honest thought without prospect or retrospect, and, I cannot doubt, it will be found symmetrical, though I mean it not, and see it not. My book should smell of pines and resound with the hum of insects. The swallow over my window should interweave that thread or straw he carries in his bill into my web also. We pass for what we are. Character teaches above our wills. Men imagine that they communicate their virtue or vice only by overt actions, and do not see that virtue or vice emit a breath every moment.",
},
{
      "text": "A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines. With consistency a great soul has simply nothing to do. He may as well concern himself with the shadow on the wall. Speak what you think now in hard words, and to-morrow speak what to-morrow thinks in hard words again, though it contradict everything you said to-day.\u2014\"Ah, so you shall be sure to be misunderstood.\"\u2014Is it so bad, then, to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.",
},
{
      "text": "But why should you keep your head over your shoulder? Why drag about this corpse of your memory, lest you contradict somewhat you have stated in this or that public place? Suppose you should contradict yourself; what then? It seems to be a rule of wisdom never to rely on your memory alone, scarcely even in acts of pure memory, but to bring the past for judgment into the thousand-eyed present, and live ever in a new day. In your metaphysics you have denied personality to the Deity; yet when the devout motions of the soul come, yield to them heart and life, though they should clothe God with shape and color. Leave your theory, as Joseph his coat in the hand of the harlot, and flee.",
},
{
      "text": "There is a mortifying experience in particular which does not fail to wreak itself also in the general history; I mean \"the foolish face of praise,\" the forced smile which we put on in company where we do not feel at ease in answer to conversation which does not interest us. The muscles, not spontaneously moved, but moved by a low usurping willfulness, grow tight about the outline of the face with the most disagreeable sensation.",
},
{

      "text": "A man should learn to detect and watch that gleam of light which flashes across his mind from within, more than the luster of the firmament of bards and sages. Yet he dismisses without notice his thought, because it is his. In every work of genius we recognize our own rejected thoughts: they come back to us with a certain alienated majesty. Great works of art have no more affecting lesson for us than this. They teach us to abide by our spontaneous impression with good-humored inflexibility then most when the whole cry of voices is on the other side. Else, to-morrow a stranger will say with masterly good sense precisely what we have thought and felt all the time, and we shall be forced to take with shame our own opinion from another.",
},
{
      "text": "Human nature will not flourish, any more than a potato, if it be planted and replanted, for too long a series of generations, in the same worn-out soil.  My children have had other birthplaces, and, so far as their fortunes may be within my control, shall strike their roots into unaccustomed soil.",
}
];

var mongoose = require('mongoose');

console.log("opening db...")
var conn = mongoose.connect('mongodb://localhost/highlights_dev');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var BookSchema = new Schema({
    author      : String
  , title       : String
  , isbn13      : String
  , created_at  : Date
  , updated_at   : Date
});

var HighlightSchema = new Schema({
    book        : ObjectId
  , text        : String
  , created_at  : Date
  , updated_at  : Date
});

var Highlight = conn.model('Highlight', HighlightSchema);

exports.findAll = function(req, res) {
  Highlight.find({}, function(error, data) {
    res.json(data);
  });
};

exports.search = function(req, res) {
  console.log('searching for ' + req.params.query)
  Highlight.find({text: new RegExp(".*"+req.params.query+".*")}, function(error, data) {
    res.json(data);
  });
};

exports.findById = function(req, res) {
    res.json({id:req.params.id, name: "The Name", description: "description"});
};

exports.random = function(req, res) {
  console.log("executing random...")
  Highlight.find({}, function(error, data) {
    console.log("processing results for random...")
    var id = Math.floor(Math.random() * data.length);
    var q = data[id];
    res.json(q);
    res.end();
  });
};
