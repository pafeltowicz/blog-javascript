class Utils{
    static genereteKey(){
        return String(Math.random().toString(16).slice(2));
    }

    static toJSON(obj) {
        return JSON.stringify(obj);
    }

    static toMap(json){
        return JSON.parse(json);
    }
}