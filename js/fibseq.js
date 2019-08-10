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
        'group1-5': -559.5,
        'group1-6': -1106.2,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -574.8,
        'group2-6': -1084.1
    },
    '2019-04-18': {//-3026.3
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -596.5,
        'group1-6': 857,
        'group2-1': -562.4,
        'group2-2': -1081,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -562.4,
        'group2-6': -1081
    },
    '2019-04-22': {//609.5
        'group1-1': -559.3,
        'group1-2': 894.2,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': -1059.3,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 946.7,
        'group2-6': 946.5
    },
    '2019-04-23': {//5139.6
        'group1-1': -550,
        'group1-2': 903.5,
        'group1-3': 931.4,
        'group1-4': 931.4,
        'group1-5': -550,
        'group1-6': 903.5,
        'group2-1': -550,
        'group2-2': 903.5,
        'group2-3': 931.4,
        'group2-4': 931.4,
        'group2-5': -550,
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
        'group1-5': 922.1,
        'group1-6': 921.7,
        'group2-1': 922.1,
        'group2-2': 922.1,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 922.1,
        'group2-6': 922.1
    },
    '2019-04-26': {//7599.9
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 949.9,
        'group1-6': 950,
        'group2-1': 950,
        'group2-2': 950,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 950
    },
    '2019-04-29': {//-9767.5
        'group1-1': -550,
        'group1-2': -1068.6,
        'group1-3': -568.6,
        'group1-4': -1077.9,
        'group1-5': -550,
        'group1-6': -1068.6,
        'group2-1': -550,
        'group2-2': -1068.6,
        'group2-3': -568.6,
        'group2-4': -1077.9,
        'group2-5': -550.1,
        'group2-6': -1068.6
    },
    '2019-04-30': {//-3256.1
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': -1068.6,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -559.6,
        'group2-6': -1068.6
    },
    '2019-05-01': {//-5729
        'group1-1': -550,
        'group1-2': -1059.3,
        'group1-3': -559.3,
        'group1-4': 903.5,
        'group1-5': -548,
        'group1-6': -1050.4,
        'group2-1': -550,
        'group2-2': -1059.3,
        'group2-3': -559.3,
        'group2-4': 903.5,
        'group2-5': -550.4,
        'group2-6': -1050
    },
    '2019-05-02': {//2364
        'group1-1': -550,
        'group1-2': 912.8,
        'group1-3': 922.1,
        'group1-4': 922.1,
        'group1-5': 894,
        'group1-6': 894.2,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -562.4,
        'group2-6': -1068.8
    },
    '2019-05-03': {//-1016.9
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 949.6,
        'group1-6': 949.6,
        'group2-1': -550,
        'group2-2': -1053.1,
        'group2-3': -553.1,
        'group2-4': -1059.3,
        'group2-5': -550.3,
        'group2-6': -1050.3
    },
    '2019-05-06': {//4395.9
        'group1-1': 931.4,
        'group1-2': 931.4,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': 884.9,
        'group2-1': 931.4,
        'group2-2': 931.4,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -549.5,
        'group2-6': 884.9
    },
    '2019-05-07': {//7339.6
        'group1-1': 940.7,
        'group1-2': 940.7,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 894.2,
        'group1-6': 894.2,
        'group2-1': 940.7,
        'group2-2': 940.7,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 894.2,
        'group2-6': 894.2
    },
    '2019-05-08': {//4320.6
        'group1-1': 903.5,
        'group1-2': 903.5,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': 903.1,
        'group2-1': 903.5,
        'group2-2': 903.5,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': 903.5
    },
    '2019-05-09': {//7402
        'group1-1': 912.8,
        'group1-2': 912.8,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 962.6,
        'group1-6': 962.6,
        'group2-1': 912.8,
        'group2-2': 912.8,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 912.8,
        'group2-6': 912.8
    },
    '2019-05-10': {//3762.4
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 940.5,
        'group1-6': 940.5,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 940.7,
        'group2-6': 940.7
    },
    '2019-05-13': {//4602.2
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': 952.6,
        'group2-1': 950,
        'group2-2': 950,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': 949.6
    },
    '2019-05-14': {//-6511.6
        'group1-1': -568.6,
        'group1-2': -1068.6,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': -1068.6,
        'group2-1': -568.6,
        'group2-2': -1068.6,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': -1068.6
    },
    '2019-05-15': {//-6474.7
        'group1-1': -559.3,
        'group1-2': -1059.3,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.6,
        'group1-6': -1059.3,
        'group2-1': -559.3,
        'group2-2': -1059.3,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -559.3,
        'group2-6': -1059.3
    },
    '2019-05-16': {//-9656.1
        'group1-1': -550,
        'group1-2': -1050,
        'group1-3': -550,
        'group1-4': -1077.9,
        'group1-5': -550,
        'group1-6': -1050,
        'group2-1': -550,
        'group2-2': -1050,
        'group2-3': -550,
        'group2-4': -1077.9,
        'group2-5': -550,
        'group2-6': -1050.3
    },
    '2019-05-17': {//-2919.4
        'group1-1': -550,
        'group1-2': -1050,
        'group1-3': -550,
        'group1-4': -1068.6,
        'group1-5': -550.3,
        'group1-6': -1050,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 949.7,
        'group2-6': 949.8
    },
    '2019-05-20': {//-893.4
        'group1-1': -559.3,
        'group1-2': 922.1,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': 922.1,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -559.7,
        'group2-6': -1059.3
    },
    '2019-05-21': {//931.4
        'group1-1': -550,
        'group1-2': 931.4,
        'group1-3': 931.4,
        'group1-4': 931.4,
        'group1-5': -550,
        'group1-6': 850,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -556.6,
        'group2-6': -1056.2
    },
    '2019-05-22': {//-1331.9
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 940.4,
        'group1-6': 940.4,
        'group2-1': -553.1,
        'group2-2': -1053.1,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -553.1,
        'group2-6': -1053.4
    },
    '2019-05-23': {//-2931
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 950,
        'group1-6': 950,
        'group2-1': -550,
        'group2-2': -1050,
        'group2-3': -550,
        'group2-4': -1081,
        'group2-5': -550,
        'group2-6': -1050
    },
    '2019-05-24': {//632.6
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -568.6,
        'group1-6': 884.9,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -568.6,
        'group2-6': 884.9
    },
    '2019-05-27': {//669.4
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -559.3,
        'group1-6': 893.8,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -559.3,
        'group2-6': 894.2
    },
    '2019-05-28': {//-5804.6
        'group1-1': -550,
        'group1-2': -1068.6,
        'group1-3': -568.6,
        'group1-4': 903.5,
        'group1-5': -550,
        'group1-6': -1068.6,
        'group2-1': -550,
        'group2-2': -1068.6,
        'group2-3': -568.6,
        'group2-4': 903.5,
        'group2-5': -550,
        'group2-6': -1068.6
    },
    '2019-05-29': {//-3015.1
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 912.8,
        'group1-6': 912.8,
        'group2-1': -550,
        'group2-2': -1062.4,
        'group2-3': -562.4,
        'group2-4': -1062.4,
        'group2-5': -550.4,
        'group2-6': -1053.1
    },
    '2019-05-30': {//-4465.4
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': 921.8,
        'group2-1': -550,
        'group2-2': -1059.3,
        'group2-3': -559.3,
        'group2-4': -1059.3,
        'group2-5': -550,
        'group2-6': -1059.3
    },
    '2019-05-31': {//3799.6
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
        'group2-6': 949.6
    },
    '2019-06-03': {//3799.3
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 949.6,
        'group1-6': 950,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 949.7,
        'group2-6': 950
    },
    '2019-06-04': {//781
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550.4,
        'group1-6': 940.7,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': 940.7
    },
    '2019-06-05': {//7599.7
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 949.7,
        'group1-6': 950,
        'group2-1': 950,
        'group2-2': 950,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 950
    },
    '2019-06-06': {//4432.6
        'group1-1': 922.1,
        'group1-2': 922.1,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -550,
        'group1-6': 922.1,
        'group2-1': 922.1,
        'group2-2': 922.1,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': 922.1
    },
    '2019-06-07': {//7599.8
        'group1-1': 950,
        'group1-2': 950,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 950,
        'group1-6': 950,
        'group2-1': 950,
        'group2-2': 950,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 949.8,
        'group2-6': 950
    },
    '2019-06-10': {//-9618.6
        'group1-1': -550,
        'group1-2': -1050,
        'group1-3': -550,
        'group1-4': -1059.3,
        'group1-5': -550,
        'group1-6': -1050,
        'group2-1': -550,
        'group2-2': -1050,
        'group2-3': -550,
        'group2-4': -1059.3,
        'group2-5': -550,
        'group2-6': -1050
    },
    '2019-06-11': {//-780
        'group1-1': -528,
        'group1-2': 971,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -560,
        'group1-6': 957,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -552,
        'group2-6': -1068
    },
    '2019-06-12': {//-2774.5
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 1010,
        'group1-6': 1010,
        'group2-1': -549.5,
        'group2-2': -1046,
        'group2-3': -549,
        'group2-4': -1048,
        'group2-5': -554,
        'group2-6': -1048
    },
    '2019-06-13': {//-2973
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 959,
        'group1-6': 959,
        'group2-1': -546,
        'group2-2': -1045,
        'group2-3': -548,
        'group2-4': -1156,
        'group2-5': -554,
        'group2-6': -1042
    },
    '2019-06-14': {//-419
        'group1-1': -545,
        'group1-2': 944,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 962,
        'group1-6': 963,
        'group2-1': -655,
        'group2-2': -1048,
        'group2-3': -463,
        'group2-4': 1039,
        'group2-5': -555,
        'group2-6':-1061
    },
    '2019-06-17': {//1217
        'group1-1': -529,
        'group1-2': 950,
        'group1-3': 946,
        'group1-4': 943,
        'group1-5': -558,
        'group1-6': 1065,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -556,
        'group2-6': -1044
    },
    '2019-06-18': {//2479
        'group1-1': 946,
        'group1-2': 948,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 952,
        'group1-6': 948,
        'group2-1': -552,
        'group2-2': -1048,
        'group2-3': 945,
        'group2-4': 945,
        'group2-5': -556,
        'group2-6': -1049
    },
    '2019-06-19': {//-2660
        'group1-1': 960,
        'group1-2': 960,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -571,
        'group1-6': 959,
        'group2-1': -540,
        'group2-2': -1132,
        'group2-3': -638,
        'group2-4': -1039,
        'group2-5': -558,
        'group2-6': -1061
    },
    '2019-06-20': {//7778
        'group1-1': 970,
        'group1-2': 972,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 951,
        'group1-6': 953,
        'group2-1': 972,
        'group2-2': 972,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 1038,
        'group2-6': 950
    },
    '2019-06-21': {//8497
        'group1-1': 1171,
        'group1-2': 1164,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 956,
        'group1-6': 958,
        'group2-1': 1164,
        'group2-2': 1164,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 958,
        'group2-6': 962
    },
    '2019-06-24': {//3809
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 963,
        'group1-6': 947,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 949,
        'group2-6': 950
    },
    '2019-06-25': {//6929
        'group1-1': 970,
        'group1-2': 970,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 1017,
        'group1-6': 972,
        'group2-1': 979,
        'group2-2': 979,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 979,
        'group2-6': 977 
    },
    '2019-06-26': {//-9391
        'group1-1': -550,
        'group1-2': -1026,
        'group1-3': -558,
        'group1-4': -1036,
        'group1-5': -547,
        'group1-6': -1051,
        'group2-1': -530,
        'group2-2': -1034,
        'group2-3': -542,
        'group2-4': -995,
        'group2-5': -527,
        'group2-6': -995
    },
    '2019-06-27': {//4631
        'group1-1': -554,
        'group1-2': 965,
        'group1-3': 982,
        'group1-4': 982,
        'group1-5': -548,
        'group1-6': -1080,
        'group2-1': 992,
        'group2-2': 992,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 950
    },
    '2019-06-28': {//430
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 1025,
        'group1-6': 1026,
        'group2-1': -544,
        'group2-2': -1137,
        'group2-3': -625,
        'group2-4': 2298,
        'group2-5': -560,
        'group2-6': -1053
    },
    '2019-07-01': {//4572
        'group1-1': -511,
        'group1-2': 975,
        'group1-3': 962,
        'group1-4': 962,
        'group1-5': -559,
        'group1-6': -1045,
        'group2-1': 945,
        'group2-2': 945,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 948,
        'group2-6': 950
    },
    '2019-07-02': {//-2886
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 954,
        'group1-6': 943,
        'group2-1': -554,
        'group2-2': -1050,
        'group2-3': -538,
        'group2-4': -1027,
        'group2-5': -562,
        'group2-6': -1052
    },
    '2019-07-03': {//-4233
        'group1-1': -515,
        'group1-2': -938,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 950,
        'group1-6': 946,
        'group2-1': -550,
        'group2-2': -1096,
        'group2-3': -491,
        'group2-4': -944,
        'group2-5': -545,
        'group2-6': -1050
    },
    '2019-07-04': {//1609
        'group1-1': -514,
        'group1-2': -913,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -544,
        'group1-6': -981,
        'group2-1': 1109,
        'group2-2': 1109,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 1173,
        'group2-6': 1170
    },
    '2019-07-05': {//-1612
        'group1-1': -495,
        'group1-2': -918,
        'group1-3': -281,
        'group1-4': -898,
        'group1-5': -617,
        'group1-6': -1070,
        'group2-1': 1114,
        'group2-2': 1114,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -550,
        'group2-6': 989
    },
    '2019-07-08': {//1119
        'group1-1': -547,
        'group1-2': -1036,
        'group1-3': 968,
        'group1-4': 968,
        'group1-5': -550,
        'group1-6': -1059,
        'group2-1': 975,
        'group2-2': 975,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -554,
        'group2-6': 979
    },
    '2019-07-09': {//1129
        'group1-1': -534,
        'group1-2': 960,
        'group1-3': 1030,
        'group1-4': 1030,
        'group1-5': -592,
        'group1-6': 954,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -649,
        'group2-6': -1070
    },
    '2019-07-10': {//-3800
        'group1-1': -550,
        'group1-2': 955,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -558,
        'group1-6': 952,
        'group2-1': -440,
        'group2-2': -930,
        'group2-3': -542,
        'group2-4': -1056,
        'group2-5': -586,
        'group2-6': -1045 
    },
    '2019-07-11': {//-5489
        'group1-1': -519,
        'group1-2': -1002,
        'group1-3': -545,
        'group1-4': 995,
        'group1-5': -578,
        'group1-6': -1084,
        'group2-1': -519,
        'group2-2': -1002,
        'group2-3': -545,
        'group2-4': 995,
        'group2-5': -591,
        'group2-6': -1094
    },
    '2019-07-12': {//-2943
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 962,
        'group1-6': 962,
        'group2-1': -538,
        'group2-2': -1065,
        'group2-3': -570,
        'group2-4': -1096,
        'group2-5': -548,
        'group2-6': -1050
    },
    '2019-07-15': {//-5598
        'group1-1': -597,
        'group1-2': -1052,
        'group1-3': -523,
        'group1-4': 1010,
        'group1-5': -564,
        'group1-6': -1075,
        'group2-1': -597,
        'group2-2': -1052,
        'group2-3': -523,
        'group2-4': 1010,
        'group2-5': -565,
        'group2-6': -1070
    },
    '2019-07-16': {//-5350
        'group1-1': -531,
        'group1-2': -1036,
        'group1-3': -512,
        'group1-4': 1021,
        'group1-5': -572,
        'group1-6': -1060,
        'group2-1': -531,
        'group2-2': -1038,
        'group2-3': -510,
        'group2-4': 1021,
        'group2-5': -569,
        'group2-6': -1033
    },
    '2019-07-17': {//-2556
        'group1-1': 959,
        'group1-2': 959,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -552,
        'group1-6': 950,
        'group2-1': -556,
        'group2-2': -1059,
        'group2-3': -592,
        'group2-4': -1060,
        'group2-5': -552,
        'group2-6': -1053
    },
    '2019-07-18': {//-5628
        'group1-1': -646,
        'group1-2': -1062,
        'group1-3': -482,
        'group1-4': 1019,
        'group1-5': -552,
        'group1-6': -1091,
        'group2-1': -643,
        'group2-2': -1059,
        'group2-3': -493,
        'group2-4': 1019,
        'group2-5': -548,
        'group2-6': -1090
    },
    '2019-07-19': {//-7949
        'group1-1': -544,
        'group1-2': -1037,
        'group1-3': -531,
        'group1-4': -1261,
        'group1-5': -572,
        'group1-6': -1050,
        'group2-1': -544,
        'group2-2': -1037,
        'group2-3': -531,
        'group2-4': -1261,
        'group2-5': -560,
        'group2-6': -1054
    },
    '2019-07-22': {//-1283
        'group1-1': -540,
        'group1-2': -1037,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -553,
        'group1-6': -1053,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 950,
        'group2-6': 950
    },
    '2019-07-23': {//1027
        'group1-1': -542,
        'group1-2': -1039,
        'group1-3': -549,
        'group1-4': 950,
        'group1-5': -557,
        'group1-6': -1061,
        'group2-1': 956,
        'group2-2': 956,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 956,
        'group2-6': 957
    },
    '2019-07-24': {//-957
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 932,
        'group1-6': 992,
        'group2-1': -546,
        'group2-2': -1064,
        'group2-3': -566,
        'group2-4': 965,
        'group2-5': -555,
        'group2-6': -1055
    },
    '2019-07-25': {//-695.5
        'group1-1': -597,
        'group1-2': -1080,
        'group1-3': -565,
        'group1-4': 982.5,
        'group1-5': -675,
        'group1-6': -1050,
        'group2-1': 1024,
        'group2-2': 1035,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -720,
        'group2-6': 950
    },
    '2019-07-26': {//557.6
        'group1-1': 945,
        'group1-2': 945,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 947,
        'group1-6': 925,
        'group2-1': -578,
        'group2-2': -1027.4,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -547,
        'group2-6': -1052
    },
    '2019-07-29': {//1050.0
        'group1-1': 949,
        'group1-2': 949,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 946.5,
        'group1-6': 946.5,
        'group2-1': -563,
        'group2-2': -1028.2,
        'group2-3': -529.2,
        'group2-4': 980.6,
        'group2-5': -550,
        'group2-6': -1051.2
    },
    '2019-07-30': {//-6694.0
        'group1-1': -571.5,
        'group1-2': -1054.5,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': -653.5,
        'group1-6': -1067.5,
        'group2-1': -571.5,
        'group2-2': -1054.5,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': -653.5,
        'group2-6': -1067.5
    },
    '2019-07-31': {//-9708
        'group1-1': -589,
        'group1-2': -1062,
        'group1-3': -533,
        'group1-4': -1015,
        'group1-5': -545,
        'group1-6': -1111,
        'group2-1': -589,
        'group2-2': -1062,
        'group2-3': -532,
        'group2-4': -1015,
        'group2-5': -545,
        'group2-6': -1110
    },
    '2019-08-01': {//2900
        'group1-1': -568,
        'group1-2': 936,
        'group1-3': 965,
        'group1-4': 965,
        'group1-5': -547,
        'group1-6': -1054,
        'group2-1': 968,
        'group2-2': 968,
        'group2-3': -595,
        'group2-4': -1058,
        'group2-5': 953,
        'group2-6': 967
    },
    '2019-08-02': {//-5778.0
        'group1-1': -526,
        'group1-2': -1055,
        'group1-3': -550,
        'group1-4': 949.5,
        'group1-5': -632,
        'group1-6': -1039,
        'group2-1': -526,
        'group2-2': -1055,
        'group2-3': -548,
        'group2-4': 951.5,
        'group2-5': -691,
        'group2-6': -1057
    },
    '2019-08-05': {//7616
        'group1-1': 955,
        'group1-2': 955,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 947,
        'group1-6': 947,
        'group2-1': 955,
        'group2-2': 955,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 946,
        'group2-6': 956
    },
    '2019-08-06': {//1452.0
        'group1-1': -558,
        'group1-2': 1010.5,
        'group1-3': 946,
        'group1-4': 946,
        'group1-5': -562,
        'group1-6': -1060,
        'group2-1': -555,
        'group2-2': 1010.5,
        'group2-3': 946,
        'group2-4': 946,
        'group2-5': -563,
        'group2-6': -1055
    },
    '2019-08-07': {//3796
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 945,
        'group1-6': 950,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 956,
        'group2-6': 945
    },
    '2019-08-08': {//1500.21
        'group1-1': -516,//s near 5 -5 +10
        'group1-2': 0,
        'group1-3': 994,//s near 10 -5 +10
        'group1-4': 994,//s near 10 -10 +10
        'group1-5': -487,//s real -5 +10
        'group1-6': -1002,//s real -10 +10
        'group2-1': -518,//m near 5 -5 +10
        'group2-2': 0,
        'group2-3': 994,//m near 10 -5 +10
        'group2-4': 994,//m near 10 -10 +10
        'group2-5': -487,//m real -5 +10
        'group2-6': 996//m real -10 +10
    },
    '2019-08-09': {//1506
        'group1-1': -498,//s near 5 -5 +10
        'group1-2': -994,//s near 5 -10 +10
        'group1-3': -495,//s near 10 -5 +10
        'group1-4': 0,
        'group1-5': -507,//s real -5 +10
        'group1-6': -1007,//s real -10 +10
        'group2-1': -505,//m near 5 -5 +10
        'group2-2': -1001,//m near 5 -10 +10
        'group2-3': -515,//m near 10 -5 +10
        'group2-4': 0,
        'group2-5': -517,//m real -5 +10
        'group2-6': -1009//m real -10 +10
    },
    '2019-08-12': {
        'group1-1': 0,
        'group1-2': 0,
        'group1-3': 0,
        'group1-4': 0,
        'group1-5': 0,
        'group1-6': o,
        'group2-1': 0,
        'group2-2': 0,
        'group2-3': 0,
        'group2-4': 0,
        'group2-5': 0,
        'group2-6': 0
    }
};
