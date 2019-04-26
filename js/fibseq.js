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
    '2019-04-10': {//-3237.2
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': -1059.3,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -559.3,
        'group2-6': -1059.3
    },
    '2019-04-11': {//-9600.2
        'group1-1': -550,
        'group1-2': -1050,
        'group1-3': -550,
        'group1-4': -1050,
        'group1-5': -550,
        'group1-6': -1050,
        'group2-1': -550,
        'group2-2': -1050,
        'group2-3': -550,
        'group2-4': -1050,
        'group2-5': -550.2,
        'group2-6': -1050
    },
    '2019-04-12': {//2144.9
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.7,
        'group1-6': -1068.8,
        'group2-1': 946.9,
        'group2-2': 946.9,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 939.8,
        'group2-6': 939.8
    },
    '2019-04-15': {//-3452.7
        'group1-1': -550,
        'group1-2': -1059.3,
        'group1-3': -559.3,
        'group1-4': -1059.3,
        'group1-5': -1059.3,
        'group1-6': -1059.3,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 946.9,
        'group2-6': 946.9
    },
    '2019-04-16': {//-2965.6
        'group1-1': -550,
        'group1-2': -1050,
        'group1-3': -550,
        'group1-4': -1115.1,
        'group1-5': -550.3,
        'group1-6': -1050,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 949.8
    },
    '2019-04-17': {//-3082.7
        'group1-1': -605.8,
        'group1-2': 847.7,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.5
        'group1-6': -1106.2,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -574.8
        'group2-6': -1084.1
    },
    '2019-04-18': {//-3026.3
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -596.5
        'group1-6': 857,
        'group2-1': -562.4,
        'group2-2': -1081,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -562.4
        'group2-6': -1081
    },
    '2019-04-22': {//609.5
        'group1-1': -559.3,
        'group1-2': 894.2,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3
        'group1-6': -1059.3,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 946.7
        'group2-6': 946.5
    },
    '2019-04-23': {//5139.6
        'group1-1': -550,
        'group1-2': 903.5,
        'group1-3': 931.4,
        'group1-4': 931.4,
        'group1-5': -550
        'group1-6': 903.5,
        'group2-1': -550,
        'group2-2': 903.5,
        'group2-3': 931.4,
        'group2-4': 931.4,
        'group2-5': -550
        'group2-6': 903.5
    },
    '2019-04-24': {//7525.6
        'group1-1': 940.7,
        'group1-2': 940.7,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 940.7,
        'group1-6': 940.7,
        'group2-1': 940.7,
        'group2-2': 940.7,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 940.7,
        'group2-6': 940.7
    },
    '2019-04-25': {//7376.4
        'group1-1': 922.1,
        'group1-2': 922.1,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 922.1
        'group1-6': 921.7,
        'group2-1': 922.1,
        'group2-2': 922.1,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 922.1
        'group2-6': 922.1
    },
    '2019-04-26': {//7599.9
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 949.9
        'group1-6': 950,
        'group2-1': 950,
        'group2-2': 950,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950
        'group2-6': 950
    },
    '2019-04-29': {
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
