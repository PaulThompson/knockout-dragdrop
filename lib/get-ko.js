var ko = null;

function access(arg){
    if(arg === undefined) {
        // get:
        return ko;
    }
    else{
        // set:
        ko = arg;
    }
}

module.exports = access;
