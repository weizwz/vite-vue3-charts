export const sites = [
  {
    index: 0,
    nodeName: '初始点',
    value: [400, 10],
    to: [1],
    label: {
      position: 'right'
    },
    rippleEffect: {
      scale: 2.5, // 涟漪规模
      number: 3
    }
  },
  {
    index: 1,
    nodeName: '原料厂',
    value: [200, 10],
    from: 0,
    to: [2],
    svgPath:
      'M558.545455 1024h93.090909l558.545454-581.818182v-139.636363L930.909091 0H279.272727L0 302.545455v139.636363l558.545455 581.818182M93.090909 325.818182v69.818182l512 535.272727 512-535.272727v-69.818182L861.090909 69.818182H349.090909z m209.454546 93.090909l46.545454-69.818182 256 256 256-256 46.545455 69.818182-302.545455 302.545454z',
    symbolSize: [20, 18],
    itemStyle: {
      color: '#43dcff'
    },
    label: {
      position: 'left'
    }
  },
  {
    index: 2,
    nodeName: '',
    value: [200, 100],
    from: 1,
    to: [3]
  },
  {
    index: 3,
    nodeName: '加工厂',
    value: [200, 200],
    from: 2,
    to: [4],
    svgPath: 'M295.602267 1024L0 512l295.602267-512h591.211359L1182.40224 512l-295.588614 512z',
    symbolSize: [20, 16],
    itemStyle: {
      color: '#43dcff'
    },
    label: {
      position: 'left'
    }
  },
  {
    index: 4,
    nodeName: '',
    value: [200, 300],
    from: 3,
    to: [5]
  },
  {
    index: 5,
    nodeName: '加油站',
    svgPath:
      'M596.48 213.461333c22.613333 0 40.96 18.090667 40.96 42.496v139.776c48.597333-5.461333 88.576 20.565333 88.576 67.285334v218.538666c0 13.44 6.485333 24.32 20.608 24.32 14.08 0 22.528-10.88 22.528-24.32V354.602667c0-32.512 0-58.794667-30.933333-72.96-10.624-4.821333-13.312-19.626667-8.192-29.696a21.845333 21.845333 0 0 1 28.458666-9.514667c46.08 21.12 51.626667 64.682667 51.626667 113.322667v325.802666c0 35.84-25.813333 64.853333-63.488 64.853334s-63.274667-29.013333-63.274667-64.853334v-218.538666c0-24.234667-21.12-24.96-45.866666-24.618667l-0.042667 328.149333-0.128 1.877334 54.272 0.042666a21.333333 21.333333 0 0 1 0 42.666667H203.52a21.333333 21.333333 0 0 1 0-42.666667h52.565333L256 766.549333V256c0-24.405333 18.346667-42.496 40.96-42.496h299.52z m-297.728 42.24H597.333333v512.426667H298.752V255.701333zM553.386667 341.333333v128H341.717333V341.333333h211.626667z m-169.258667 42.453334h128.170667v42.666666H384.128v-42.666666z',
    symbolSize: [20, 16],
    value: [200, 400],
    from: 4,
    to: [6, 7, 8],
    itemStyle: {
      color: '#ed4b42'
    },
    label: {
      position: [-46, 16]
    }
  },
  {
    index: 6,
    nodeName: '',
    value: [100, 400],
    from: 5,
    to: [19]
  },
  {
    index: 7,
    nodeName: '休息区',
    value: [200, 450],
    from: 5,
    svgPath:
      'M819.2 179.2V51.2H0v563.2a204.8 204.8 0 0 0 204.8 204.8h409.6a204.8 204.8 0 0 0 204.8-204.8v-25.6a204.8 204.8 0 0 0 0-409.6z m0 307.2v-204.8a102.4 102.4 0 0 1 0 204.8zM0 921.6h819.2v102.4H0z',
    symbolSize: 20,
    symbolOffset: [2, -10],
    itemStyle: {
      color: '#30e470'
    }
  },
  {
    index: 8,
    nodeName: '',
    value: [300, 400],
    from: 5,
    to: [9]
  },
  {
    index: 9,
    nodeName: '',
    value: [400, 400],
    from: 8,
    to: [10]
  },
  {
    index: 10,
    nodeName: '控制间',
    value: [500, 400],
    from: 9,
    to: [11],
    svgPath:
      'M495.458 852.992a58.92 58.92 0 0 1-3.702-20.48V708.923H78.77A78.77 78.77 0 0 1 0 630.153V78.77A78.77 78.77 0 0 1 78.77 0H1024a78.77 78.77 0 0 1 78.77 78.77v551.384a78.77 78.77 0 0 1-78.77 78.77H609.91v123.51c0 7.246-1.26 14.178-3.702 20.48h196.53a59.077 59.077 0 0 1 0 118.153H297.195a59.077 59.077 0 1 1 0-118.154h198.262z',
    symbolSize: 18,
    itemStyle: {
      color: '#43dcff'
    }
  },
  {
    index: 11,
    nodeName: '',
    value: [600, 400],
    from: 10,
    to: [12]
  },
  {
    index: 12,
    nodeName: '',
    value: [700, 400],
    from: 11,
    to: [13],
    data: 500
  },
  {
    index: 13,
    nodeName: '涂层间',
    value: [800, 400],
    from: 12,
    to: [14],
    svgPath:
      'M511.658667 0c131.310933 0 255.044267 14.062933 348.501333 39.799467 47.2064 12.936533 84.718933 28.330667 111.616 45.738666 34.167467 22.186667 51.438933 47.9232 51.438933 76.629334 0 25.224533-13.4144 48.128-39.765333 68.369066l-0.034133 573.44c0 7.68-2.184533 15.086933-6.280534 21.4016-21.4016 61.986133-83.1488 100.283733-160.5632 129.809067-84.1728 30.958933-193.194667 48.9472-312.661333 49.0496-119.534933-0.1024-228.420267-18.090667-312.695467-49.0496-77.312-29.627733-139.195733-68.061867-160.426666-129.9456a39.594667 39.594667 0 0 1-6.314667-21.367467L24.405333 216.746667C8.192 200.0896 0 181.794133 0 162.0992c0-28.706133 17.408-54.442667 51.575467-76.629333 26.862933-17.408 64.375467-32.836267 111.616-45.738667C256.682667 14.097067 380.381867 0 511.6928 0zM149.538133 280.541867l4.744534 10.274133c14.404267 33.0752 18.6368 66.116267 27.204266 93.320533 6.7584 25.3952 24.814933 61.6448 38.331734 66.013867 3.1744 1.604267 6.144 2.1504 9.9328 2.1504 9.728 0.341333 24.576-6.280533 36.932266-15.325867 6.075733-3.9936 17.066667-17.032533 29.866667-29.934933 12.9024-12.4928 29.627733-27.818667 55.569067-28.2624 1.024 0 2.628267 0 3.8912 0.1024 25.4976 1.604267 41.745067 21.162667 47.786666 37.0688 6.894933 16.452267 8.6016 32.938667 9.728 44.714667l0.136534 2.8672s-0.341333 8.465067-0.341334 22.971733c-0.477867 53.76 4.437333 192.8192 33.28 253.201067 9.489067 20.48 18.978133 27.204267 23.995734 27.204266l5.495466 1.365334c0.136533 0 0.477867 0.136533 0.9216 0.136533a25.531733 25.531733 0 0 0 5.12 0.580267c6.894933-0.682667 16.622933-0.682667 30.208-21.6064 13.277867-21.2992 26.999467-66.901333 26.897067-152.576 0-28.945067-1.365333-62.464-4.8128-101.102934a72.4992 72.4992 0 0 1-0.443733-12.8c0-11.332267 1.365333-29.627733 10.274133-48.708266a85.572267 85.572267 0 0 1 56.149333-46.216534c3.9936-1.262933 12.936533-3.754667 24.814934-3.754666a74.1376 74.1376 0 0 1 56.7296 25.941333c17.408 20.343467 27.4432 51.336533 28.023466 97.553067 0 16.930133 3.8912 32.3584 10.752 39.253333 6.9632 7.509333 12.9024 9.557333 20.923734 9.693867 13.038933 0.443733 32.3584-10.513067 42.325333-24.712534 18.773333-25.3952 26.624-66.423467 29.252267-103.492266 0.136533-7.202133 1.365333-41.403733 10.308266-82.3296 3.857067-17.408 9.0112-36.0448 16.315734-54.408534-90.658133 22.254933-206.267733 34.474667-328.192 34.474667-131.2768 0-255.010133-14.0288-348.4672-39.765333-4.642133-1.297067-9.216-2.56-13.653334-3.8912z m354.474667-219.579734c-33.792 0-66.730667 0.580267-98.167467 2.184534-35.157333 2.184533-69.085867 5.461333-101.239466 9.796266-12.151467 1.877333-23.893333 4.061867-35.157334 6.5536-65.979733 14.165333-117.111467 35.4304-141.9264 54.9888-17.169067 13.277867-19.114667 21.742933-18.773333 23.552h-5.256533v22.766934c3.652267 4.027733 8.362667 8.567467 14.404266 13.277866 14.472533 11.264 35.601067 22.528 61.917867 32.733867l-0.8192-0.273067c88.507733 24.234667 206.6432 37.649067 332.663467 37.649067 103.0144 0 200.704-8.942933 281.326933-25.463467 42.9056-12.868267 76.526933-28.2624 97.211733-44.6464 6.178133-4.7104 10.888533-9.045333 14.404267-13.277866V158.037333h-5.256533c0.238933-1.706667-1.809067-10.274133-18.8416-23.552-16.4864-12.8-44.714667-26.965333-81.339734-38.775466-73.181867-23.893333-178.619733-34.747733-295.150933-34.747734z',
    symbolSize: 20,
    itemStyle: {
      color: '#43dcff'
    }
  },
  {
    index: 14,
    nodeName: '冷却间',
    value: [900, 400],
    from: 13,
    to: [15],
    data: 500
  },
  {
    index: 15,
    nodeName: '',
    value: [1000, 400],
    from: 14,
    to: [16]
  },
  {
    index: 16,
    nodeName: '组装间',
    value: [1000, 300],
    from: 15,
    to: [17],
    svgPath:
      'M1036.74608 135.558l-5.363-2.926a35.596 35.596 0 0 0-7.315-7.314L814.39208 4.876a36.084 36.084 0 0 0-34.133 0L570.58308 125.318l-5.852 5.852-8.29 4.876a10.728 10.728 0 0 0-5.363 9.264v20.48l-10.24-5.851a36.084 36.084 0 0 0-36.084 0l-10.24 5.851v-19.504a10.728 10.728 0 0 0-6.827-10.728l-8.29-4.876s-3.413-4.389-5.85-5.852L263.87008 4.876a36.084 36.084 0 0 0-36.084 0L18.11008 125.318a35.109 35.109 0 0 0-7.802 7.802l-5.364 2.926a10.728 10.728 0 0 0-4.876 10.24v263.802a10.728 10.728 0 0 0 5.364 9.264l5.364 2.926a34.621 34.621 0 0 0 7.802 7.802l209.676 120.442a36.084 36.084 0 0 0 36.084 0l11.703-6.827v10.24a36.571 36.571 0 0 0 16.579 31.208l5.364 2.926-19.018 10.727a10.728 10.728 0 0 0-5.363 9.265v265.265a10.24 10.24 0 0 0 4.876 8.777 35.596 35.596 0 0 0 14.14 16.579l209.677 120.442a36.084 36.084 0 0 0 36.084 0l209.676-120.442a35.596 35.596 0 0 0 14.14-16.58 10.24 10.24 0 0 0 4.877-8.776V608.06a10.728 10.728 0 0 0-5.364-9.265L743.20008 588.07l5.365-2.926a36.571 36.571 0 0 0 18.041-31.208v-10.24l11.703 6.827a36.084 36.084 0 0 0 36.084 0l209.676-120.442a36.084 36.084 0 0 0 7.315-7.314l5.363-2.926a10.728 10.728 0 0 0 5.364-9.265v-264.29a10.728 10.728 0 0 0-5.364-10.727zM526.21008 466.164a10.728 10.728 0 0 0-10.24 0l-163.84 92.16-23.893-14.141v-31.208l146.286-83.383 5.851-5.851 7.314-4.389a10.728 10.728 0 0 0 5.364-9.264V226.743l28.282-16.092 28.282 16.092v183.345a10.728 10.728 0 0 0 5.364 9.264l8.29 4.389a35.109 35.109 0 0 0 5.85 5.851l146.286 83.383v30.72l-23.893 14.141z',
    symbolSize: 20,
    itemStyle: {
      color: '#43dcff'
    },
    label: {
      position: 'left'
    }
  },
  {
    index: 17,
    nodeName: '试验间',
    value: [1150, 300],
    from: 16,
    to: [18]
  },
  {
    index: 18,
    nodeName: '出货间',
    value: [1300, 300],
    from: 17,
    svgPath:
      'M1090.365292 264.364221L987.80075 40.038565c-10.420996-24.132833-34.005356-39.490091-60.332084-40.038565H167.284413c-26.326727 0.548473-50.459561 16.454205-60.880557 41.135512L6.581682 264.364221C2.193894 274.236743 0 284.65774 0 295.078736v552.861275c0 72.3985 88.304231 176.059989 171.123728 176.059989h754.151044c69.656133 0 171.672201-93.240493 171.123728-176.059989V296.175683c1.096947-10.96947-1.096947-21.390466-6.033208-31.811462z m-526.534547 113.534011l243.522228 253.943225c6.581682 8.775576 4.387788 20.293519-3.839315 26.875201-3.839314 2.742367-8.227102 3.839314-12.61489 3.839314h-128.342796c-10.96947-0.548473-19.745046 8.227102-20.293519 19.196572v193.611141c0 4.936261-2.193894 9.872523-6.033208 13.711837s-8.775576 5.484735-13.711837 5.484735h-148.087842c-10.96947 0.548473-20.293519-8.227102-20.293519-19.196572v-193.611141c0-10.420996-8.775576-19.196572-19.196572-19.196572H304.951259c-7.678629 0.548473-14.260311-3.839314-17.551152-10.420996-3.290841-6.581682-2.742367-14.808784 2.193894-20.293519L532.019282 377.898232c3.839314-4.387788 9.872523-7.130155 15.905731-7.130155 6.033208 0 12.066417 2.742367 15.905732 7.130155zM970.249598 263.267274H121.212641c-8.227102-0.548473-14.808784-7.678629-14.808785-15.905731 0-2.193894 0.548473-4.387788 1.645421-6.033209l74.592394-159.057311c2.193894-4.936261 7.130155-8.775576 12.61489-8.775576h699.85217c5.484735 0 10.420996 3.290841 12.61489 8.775576l74.592394 159.057311c2.193894 4.387788 1.64542 9.872523-1.096947 14.260311-1.64542 4.387788-6.033208 7.130155-10.96947 7.678629z',
    symbolSize: 20,
    symbolOffset: [10, 0],
    itemStyle: {
      color: '#43dcff'
    }
  },
  {
    index: 19,
    nodeName: '维修站',
    value: [0, 400],
    from: 6,
    svgPath:
      'M613.504 261.12c-85.376-85.376-209.792-107.648-315.648-67.2L445.44 341.632a34.9184 34.9184 0 0 1 0 49.28l-121.472 121.472a34.9184 34.9184 0 0 1-49.28 0L127.104 364.672c-40.448 105.856-18.176 230.4 67.2 315.648 85.376 85.376 209.792 107.648 315.648 67.2l124.8 124.8c47.104 47.104 123.648 47.104 170.752 0 47.104-47.104 47.104-123.648 0-170.752l-124.8-124.8c40.576-105.856 18.176-230.272-67.2-315.648z',
    symbolSize: [20, 18],
    symbolOffset: [-2, 0],
    itemStyle: {
      color: '#59aaff'
    }
  },
  {
    index: 999,
    nodeName: '汽车',
    value: [390, 10],
    svgPath:
      'M1352.376963 292.188482h54.95288c30.827225 0 54.95288-24.125654 54.95288-54.95288s-24.125654-54.95288-54.95288-54.952879h-109.905759c-8.041885 0-16.08377 2.680628-22.785341 5.361256L1148.649215 21.445026C1139.267016 8.041885 1123.183246 0 1105.759162 0h-750.575916c-16.08377 0-32.167539 8.041885-42.890052 21.445026L187.643979 187.643979c-6.701571-4.020942-14.743455-5.361257-22.78534-5.361256H54.95288c-30.827225 0-54.95288 24.125654-54.95288 54.952879s24.125654 54.95288 54.95288 54.95288h54.952879L10.722513 423.539267c-6.701571 9.382199-10.722513 21.445026-10.722513 32.167539v514.680629c0 29.486911 24.125654 53.612565 53.612565 53.612565h222.492147c29.486911 0 53.612565-24.125654 53.612565-53.612565V857.801047c0-29.486911 24.125654-53.612565 53.612566-53.612565h696.963351c29.486911 0 53.612565 24.125654 53.612565 53.612565v166.198953h276.104712c29.486911 0 53.612565-24.125654 53.612566-53.612565V455.706806c0-12.062827-4.020942-22.78534-10.722513-32.167539l-100.523561-131.350785z m-1113.801047-38.86911l128.670157-171.56021c4.020942-6.701571 12.062827-9.382199 18.764398-9.382199h682.219895c8.041885 0 14.743455 4.020942 18.764398 9.382199l127.329843 171.56021c12.062827 16.08377 0 38.86911-18.764398 38.86911h-938.219895c-18.764398 0-30.827225-22.78534-18.764398-38.86911z m89.801047 258.680628h-109.905759c-40.209424 0-73.717277-32.167539-73.717277-73.717277 0-40.209424 32.167539-73.717277 73.717277-73.717278h109.905759c40.209424 0 73.717277 32.167539 73.717278 73.717278 0 40.209424-33.507853 73.717277-73.717278 73.717277z m914.094241 0h-109.905759c-40.209424 0-73.717277-32.167539-73.717277-73.717277 0-40.209424 32.167539-73.717277 73.717277-73.717278h109.905759c40.209424 0 73.717277 32.167539 73.717278 73.717278-1.340314 40.209424-33.507853 73.717277-73.717278 73.717277z',
    symbolSize: [30, 21],
    symbolOffset: [0, -2],
    label: {
      show: false
    },
    itemStyle: {
      color: '#ffdb5c'
    }
  }
]
