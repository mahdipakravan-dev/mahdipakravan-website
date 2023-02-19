export const CASES : Case = {
    id : "S_1",
    title : "Movies",
    isDir : true,
    childs : [
        {
            id : "S_2",
            title : "Romance",
            isDir : true,
            childs : [
                {
                    id : "S_3",
                    title : "Love 2015",
                    isDir : false,
                },
                {
                    id : "S_4",
                    title : "Love 2013",
                    isDir : false,
                },
            ]
        },
        {
            id : "S_6",
            title : "Action",
            isDir : true,
            childs : [{
                id : "S_7",
                title : "Max Paine 33",
                isDir : false,
            }]
        }
    ]
};
