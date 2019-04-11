var fibObject = {
	"3":{"bull":2,"bear":1,"prev":null,"next":5},
	"5":{"bull":3,"bear":2,"prev":3,"next":8},
	"8":{"bull":5,"bear":3,"prev":5,"next":13},
	"13":{"bull":8,"bear":5,"prev":8,"next":21},
	"21":{"bull":13,"bear":8,"prev":13,"next":34},
	"34":{"bull":21,"bear":13,"prev":21,"next":55},
	"55":{"bull":34,"bear":21,"prev":34,"next":89},
	"55":{"bull":34,"bear":21,"prev":34,"next":89},
	"89":{"bull":55,"bear":34,"prev":55,"next":144},
	"144":{"bull":89,"bear":55,"prev":89,"next":233}
};

var models = {
    '2019-04-01': {//2459.6
        'group1-1': -577.9,
        'group1-2': 884.9,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': -1058.2,
        'group2-1': 940.7,
        'group2-2': 940.7,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 940.7,
        'group2-6': 938.7
    },
    '2019-04-02': {//-2930.2
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -568.6,
        'group1-6': 894.2,
        'group2-1': -568.6,
        'group2-2': -1068.6,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': -1068.6
    },
    '2019-04-03': {//619.4
        'group1-1': -559.3,
        'group1-2': 903.5,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': -1059.3,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 946.9,
        'group2-6': 946.9
    },
    '2019-04-04': {//500
        'group1-1': 912.8,
        'group1-2': 912.8,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': -1050.4,
        'group2-1': -562.4,
        'group2-2': -1062.4,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 949.6,
        'group2-6': 950
    },
    '2019-04-05': {//5325.6
        'group1-1': -550,
        'group1-2': 940.7,
        'group1-3': 940.7,
        'group1-4': 940.7,
        'group1-5': -550,
        'group1-6': 940.7,
        'group2-1': -550,
        'group2-2': 940.7,
        'group2-3': 940.7,
        'group2-4': 940.7,
        'group2-5': -550,
        'group2-6': 940.7
    },
    '2019-04-08': {//3800
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 950,
        'group1-6': 950,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 950
    },
    '2019-04-09': {//3762.1
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 940.7,
        'group1-6': 940.4,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 940.7,
        'group2-6': 940.3
    },
    '2019-04-10': {//1303.98s升m升
        'group1-1': 0,//s近5-5+10
        'group1-2': 0,//s近5-10+10
        'group1-3': 0,//s近10-5+10
        'group1-4': 0,//s近10-10+10
        'group1-5': -559.3,//s实-5+10
        'group1-6': 0,
        'group2-1': 0,//m近5-5+10
        'group2-2': 0,//m近5-10+10
        'group2-3': 0,//m近10-5+10
        'group2-4': 0,//m近10-10+10
        'group2-5': -559.3,//m实-5+10
        'group2-6': 0
    },
    '2019-04-11': {//1308.12m升s升
        'group1-1': -550,//s近5-5+10
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,//s实-5+10
        'group1-6': 0,
        'group2-1': -550,//m近5-5+10
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550.2,//m实-5+10
        'group2-6': 0
    },
    '2019-04-12': {
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 0,
        'group1-6': 0,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 0,
        'group2-6': 0
    }
};
