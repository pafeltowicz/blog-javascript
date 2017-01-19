class Utils{
    static genereteKey(){
        return String(Math.random().toString(16).slice(2));
    }

    static toJSON(map) {
        return JSON.stringify(map);
    }

    static toMap(json){
        return JSON.parse(json);
    }
}