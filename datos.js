const clientes = [
  {
    dni: "44926861",
    nombre: "LOPEZ AVILEZ LIZ GABRIELA",
    deuda: 1155.42,
    origen: "INTERBANK",
    oferta: 796.95,
    monto_cancelacion: 693
  },
  {
    dni: "46680374",
    nombre: "MASSIRONI CUCHO JOSE LUIS",
    deuda: 1015.82,
    origen: "INTERBANK",
    oferta: 700.35,
    monto_cancelacion: 609
  },
  {
    dni: "70499509",
    nombre: "ANTONIO RAMIREZ FREDDY NATIVIDAD",
    deuda: 1668.37,
    origen: "INTERBANK",
    oferta: 1151.15,
    monto_cancelacion: 1001
  },
  {
    dni: "45436425",
    nombre: "MEDINA VASQUEZ JAIR ANTONIONI",
    deuda: 2020.65,
    origen: "INTERBANK",
    oferta: 1393.8,
    monto_cancelacion: 1212
  },
  {
    dni: "71830896",
    nombre: "LANDA VILLASANTE DIEGO ENRIQUE",
    deuda: 1018.13,
    origen: "INTERBANK",
    oferta: 702.65,
    monto_cancelacion: 611
  },
  {
    dni: "16027233",
    nombre: "CHAVARRIA BONIFACIO HUGO FERRER",
    deuda: 1313.2,
    origen: "INTERBANK",
    oferta: 906.2,
    monto_cancelacion: 788
  },
  {
    dni: "25706251",
    nombre: "ALVAREZ VELIZ DANTE ERICH",
    deuda: 2250.07,
    origen: "INTERBANK",
    oferta: 1552.5,
    monto_cancelacion: 1350
  },
  {
    dni: "47182643",
    nombre: "CASTILLO FRANCO MELISSA ESTEFANY",
    deuda: 1688.5,
    origen: "INTERBANK",
    oferta: 1164.95,
    monto_cancelacion: 1013
  },
  {
    dni: "48485050",
    nombre: "SARANGO VALDEZ MIRIAM",
    deuda: 1057.43,
    origen: "INTERBANK",
    oferta: 729.1,
    monto_cancelacion: 634
  },
  {
    dni: "40510384",
    nombre: "VANESSA AIDA PEREZ ZAVALA",
    deuda: 73906.14,
    origen: "BCP",
    oferta: 50995.6,
    monto_cancelacion: 44344
  },
  {
    dni: "46164339",
    nombre: "GRANDA FARFAN TATIANA ELIZABETH",
    deuda: 1049.74,
    origen: "INTERBANK",
    oferta: 724.5,
    monto_cancelacion: 630
  },
  {
    dni: "7503583",
    nombre: "OLORTEGUI CANCHAYA NELVIN HERNAN",
    deuda: 4446.29,
    origen: "INTERBANK",
    oferta: 3068.2,
    monto_cancelacion: 2668
  },
  {
    dni: "10129237",
    nombre: "CHUNGA SAMASO GISELLA ESTHER",
    deuda: 1463.95,
    origen: "INTERBANK",
    oferta: 1009.7,
    monto_cancelacion: 878
  },
  {
    dni: "48651487",
    nombre: "LAZO BALDEON JEFF DAVID",
    deuda: 1690.17,
    origen: "INTERBANK",
    oferta: 1166.1,
    monto_cancelacion: 1014
  },
  {
    dni: "80316867",
    nombre: "DIAZ CENTURION EDUAR",
    deuda: 1812.9,
    origen: "INTERBANK",
    oferta: 1251.2,
    monto_cancelacion: 1088
  },
  {
    dni: "48655234",
    nombre: "HUAMAN MISAYCO PAMELA ASHLEY",
    deuda: 1539.69,
    origen: "INTERBANK",
    oferta: 1062.6,
    monto_cancelacion: 924
  },
  {
    dni: "7254730",
    nombre: "LOPEZ CACERES OFELIA VICTORIA",
    deuda: 14253.630000000001,
    origen: "INTERBANK",
    oferta: 9834.8,
    monto_cancelacion: 8552
  },
  {
    dni: "9058119",
    nombre: "LAVADO VASQUEZ ALEJANDRO",
    deuda: 1004.79,
    origen: "INTERBANK",
    oferta: 693.45,
    monto_cancelacion: 603
  },
  {
    dni: "43899838",
    nombre: "HUANSI BERNUY JULIO ANTONIO",
    deuda: 1047.42,
    origen: "INTERBANK",
    oferta: 722.2,
    monto_cancelacion: 628
  },
  {
    dni: "70297076",
    nombre: "CUCHO QUISPE BEENYHI RUBENS",
    deuda: 1023.35,
    origen: "INTERBANK",
    oferta: 706.1,
    monto_cancelacion: 614
  },
  {
    dni: "71321851",
    nombre: "ROQUE JULCA LUIS FERNANDO",
    deuda: 2817.43,
    origen: "INTERBANK",
    oferta: 1943.5,
    monto_cancelacion: 1690
  },
  {
    dni: "2689566",
    nombre: "RIVAS CALDERON MARCOS AURELIO",
    deuda: 1909.84,
    origen: "INTERBANK",
    oferta: 1317.9,
    monto_cancelacion: 1146
  },
  {
    dni: "8034694",
    nombre: "CAMPOS CABELLOS TEOFILA",
    deuda: 1209.78,
    origen: "INTERBANK",
    oferta: 834.9,
    monto_cancelacion: 726
  },
  {
    dni: "9251433",
    nombre: "GOMEZ FLORES ZOILA MERCEDES",
    deuda: 1166.26,
    origen: "INTERBANK",
    oferta: 805.0,
    monto_cancelacion: 700
  },
  {
    dni: "9680157",
    nombre: "CASTILLO HUMERES MARIZA",
    deuda: 1749.74,
    origen: "INTERBANK",
    oferta: 1207.5,
    monto_cancelacion: 1050
  },
  {
    dni: "21427753",
    nombre: "MONTES DE FIGUEROA LEONARDA AMELIA",
    deuda: 1954.18,
    origen: "INTERBANK",
    oferta: 1348.95,
    monto_cancelacion: 1173
  },
  {
    dni: "29575266",
    nombre: "LUQUE CARPIO MARITZA JUDITH",
    deuda: 2821.91,
    origen: "INTERBANK",
    oferta: 1946.95,
    monto_cancelacion: 1693
  },
  {
    dni: "40127392",
    nombre: "GIL SANDOVAL PABLO FRANCISCO",
    deuda: 15150.990000000002,
    origen: "MIBANCO",
    oferta: 10454.65,
    monto_cancelacion: 9091
  },
  {
    dni: "41370784",
    nombre: "FARFAN GONZALEZ MAYCOL EDUARDO",
    deuda: 2563.25,
    origen: "INTERBANK",
    oferta: 1768.7,
    monto_cancelacion: 1538
  },
  {
    dni: "41556922",
    nombre: "RODRIGUEZ TAMAYO YANINA MILAGRITOS",
    deuda: 3109.85,
    origen: "RIPLEY",
    oferta: 2145.9,
    monto_cancelacion: 1866
  },
  {
    dni: "44318487",
    nombre: "VALVERDE ROMERO JOHN SMITH",
    deuda: 1275.71,
    origen: "INTERBANK",
    oferta: 879.75,
    monto_cancelacion: 765
  },
  {
    dni: "45310270",
    nombre: "CHOCCE CARBAJAL CARMEN JACQUELINE",
    deuda: 1318.95,
    origen: "INTERBANK",
    oferta: 909.65,
    monto_cancelacion: 791
  },
  {
    dni: "45352962",
    nombre: "LEONARDO CABRERA JESSICA LISSETE",
    deuda: 1247.69,
    origen: "INTERBANK",
    oferta: 861.35,
    monto_cancelacion: 749
  },
  {
    dni: "45805934",
    nombre: "MACEDO USCAMAITA DE TORRES ESTEFANI MADELEINE",
    deuda: 1050.25,
    origen: "INTERBANK",
    oferta: 724.5,
    monto_cancelacion: 630
  },
  {
    dni: "47676668",
    nombre: "TABOADA ALARCON ANTHONY JHONATHAN",
    deuda: 1755.91,
    origen: "INTERBANK",
    oferta: 1212.1,
    monto_cancelacion: 1054
  },
  {
    dni: "75546939",
    nombre: "OVIEDO CHINGA JERSONN JAHYR",
    deuda: 1020.93,
    origen: "INTERBANK",
    oferta: 704.95,
    monto_cancelacion: 613
  },
  {
    dni: "42388404",
    nombre: "NELSON LOPEZ GRACE",
    deuda: 1815.64,
    origen: "INTERBANK",
    oferta: 1252.35,
    monto_cancelacion: 1089
  },
  {
    dni: "44399131",
    nombre: "MENDOZA NARO NEOLINA",
    deuda: 2254.78,
    origen: "INTERBANK",
    oferta: 1555.95,
    monto_cancelacion: 1353
  },
  {
    dni: "46890702",
    nombre: "PLACIDO RIVERA ESTEFANI JANET",
    deuda: 1451.48,
    origen: "INTERBANK",
    oferta: 1001.65,
    monto_cancelacion: 871
  },
  {
    dni: "6432009",
    nombre: "CHIGNE MARTINEZ FIDEL ALEJANDRO",
    deuda: 1985.45,
    origen: "INTERBANK",
    oferta: 1369.65,
    monto_cancelacion: 1191
  },
  {
    dni: "6627757",
    nombre: "ANDRADE GASTELO CARLOS MIGUEL",
    deuda: 24192.57,
    origen: "INTERBANK",
    oferta: 16693.4,
    monto_cancelacion: 14516
  },
  {
    dni: "30835840",
    nombre: "MONTES COTRINA CATHERINE YESENIA",
    deuda: 2004.7,
    origen: "INTERBANK",
    oferta: 1383.45,
    monto_cancelacion: 1203
  },
  {
    dni: "41708234",
    nombre: "PEREZ VARGAS MADELEINE ROCIO",
    deuda: 1298.67,
    origen: "INTERBANK",
    oferta: 895.85,
    monto_cancelacion: 779
  },
  {
    dni: "42177386",
    nombre: "REYES ÑAUPA MICHEL",
    deuda: 1758.89,
    origen: "INTERBANK",
    oferta: 1213.25,
    monto_cancelacion: 1055
  },
  {
    dni: "46042867",
    nombre: "ARMAS ALVARADO MIROSLAVA",
    deuda: 2938.22,
    origen: "INTERBANK",
    oferta: 2027.45,
    monto_cancelacion: 1763
  },
  {
    dni: "46565743",
    nombre: "YAJAHUANCA CHINGUEL GUISSELA MILAGROS",
    deuda: 1773.25,
    origen: "INTERBANK",
    oferta: 1223.6,
    monto_cancelacion: 1064
  },
  {
    dni: "46959396",
    nombre: "JENNY WENDY SANCHEZ SANCHEZ",
    deuda: 2522.2200000000003,
    origen: "BCP",
    oferta: 1739.95,
    monto_cancelacion: 1513
  },
  {
    dni: "7007073",
    nombre: "SAN ROMAN CAMPOS JOSE ANTONIO",
    deuda: 2992.16,
    origen: "INTERBANK",
    oferta: 2064.25,
    monto_cancelacion: 1795
  },
  {
    dni: "9504671",
    nombre: "MARIA MONICA CAVERO GOMEZ",
    deuda: 1290.68,
    origen: "BANCO FALABELLA",
    oferta: 890.1,
    monto_cancelacion: 774
  },
  {
    dni: "10324549",
    nombre: "RIOS AMBROSIO ALEJANDRO SEBASTIAN",
    deuda: 2538.38,
    origen: "INTERBANK",
    oferta: 1751.45,
    monto_cancelacion: 1523
  },
  {
    dni: "10429788",
    nombre: "PEREZ PEREYRA WALTER",
    deuda: 1839.56,
    origen: "INTERBANK",
    oferta: 1269.6,
    monto_cancelacion: 1104
  },
  {
    dni: "15746536",
    nombre: "CORSINO FALCON MELBA DIONICIA",
    deuda: 2218.21,
    origen: "INTERBANK",
    oferta: 1530.65,
    monto_cancelacion: 1331
  },
  {
    dni: "15748786",
    nombre: "PALOMARES PAREDES MARIA ISABEL",
    deuda: 1120.65,
    origen: "INTERBANK",
    oferta: 772.8,
    monto_cancelacion: 672
  },
  {
    dni: "32922236",
    nombre: "BURGA AGREDA LUISA CARMEN",
    deuda: 1024.75,
    origen: "INTERBANK",
    oferta: 707.25,
    monto_cancelacion: 615
  },
  {
    dni: "41930871",
    nombre: "ANA PATRICIA MANZANARES VALLE",
    deuda: 7015.17,
    origen: "INTERBANK",
    oferta: 4840.35,
    monto_cancelacion: 4209
  },
  {
    dni: "41997290",
    nombre: "GONZALES CASTILLO ROCIO ESTHER",
    deuda: 2054.49,
    origen: "INTERBANK",
    oferta: 1417.95,
    monto_cancelacion: 1233
  },
  {
    dni: "43592413",
    nombre: "RODRIGUEZ ORMEÑO BRAULIO GABRIEL",
    deuda: 1279.88,
    origen: "INTERBANK",
    oferta: 883.2,
    monto_cancelacion: 768
  },
  {
    dni: "44521921",
    nombre: "QUIROZ TIGRE MARIA DEL PILAR",
    deuda: 2807.51,
    origen: "INTERBANK",
    oferta: 1937.75,
    monto_cancelacion: 1685
  },
  {
    dni: "45221942",
    nombre: "RUJEL SALDAÑA LEYLA KATHERINE",
    deuda: 1492.08,
    origen: "INTERBANK",
    oferta: 1029.25,
    monto_cancelacion: 895
  },
  {
    dni: "46344008",
    nombre: "SANTOS LOPEZ VICTOR JHENSY",
    deuda: 2443.71,
    origen: "INTERBANK",
    oferta: 1685.9,
    monto_cancelacion: 1466
  },
  {
    dni: "47454268",
    nombre: "PALOMINO LEON RICHARD CARLOS",
    deuda: 2098.2,
    origen: "INTERBANK",
    oferta: 1447.85,
    monto_cancelacion: 1259
  },
  {
    dni: "48335376",
    nombre: "LUQUE FERNANDEZ MARIA ALEJANDRA",
    deuda: 1972.2,
    origen: "INTERBANK",
    oferta: 1360.45,
    monto_cancelacion: 1183
  },
  {
    dni: "48450741",
    nombre: "SAAVEDRA PEREZ GLENDA ALEXANDRA",
    deuda: 2744.63,
    origen: "INTERBANK",
    oferta: 1894.05,
    monto_cancelacion: 1647
  },
  {
    dni: "70411905",
    nombre: "OCHOA PASTOR EVAMARINA D JESUS",
    deuda: 1307.99,
    origen: "INTERBANK",
    oferta: 902.75,
    monto_cancelacion: 785
  },
  {
    dni: "75801578",
    nombre: "BULEJE CARPIO PEDRO WALTER FROILAN",
    deuda: 2155.77,
    origen: "INTERBANK",
    oferta: 1486.95,
    monto_cancelacion: 1293
  },
  {
    dni: "76647566",
    nombre: "PALOMINO NIETO MARIANO ANIBAL",
    deuda: 1410.52,
    origen: "INTERBANK",
    oferta: 972.9,
    monto_cancelacion: 846
  },
  {
    dni: "76755332",
    nombre: "CASTILLO RODRIGUEZ EDISON MICHAEL",
    deuda: 1023.53,
    origen: "INTERBANK",
    oferta: 706.1,
    monto_cancelacion: 614
  },
  {
    dni: "80287502",
    nombre: "DIONICIO VALENZUELA EUDOMILIA VICTORIA",
    deuda: 2384.08,
    origen: "INTERBANK",
    oferta: 1644.5,
    monto_cancelacion: 1430
  },
  {
    dni: "18155491",
    nombre: "GARCIA CORTEZ SANTOS MARTIN",
    deuda: 5440.97,
    origen: "INTERBANK",
    oferta: 3754.75,
    monto_cancelacion: 3265
  },
  {
    dni: "46499183",
    nombre: "CAMPOS ENRIQUE GILVER JAVIER",
    deuda: 1945.29,
    origen: "INTERBANK",
    oferta: 1342.05,
    monto_cancelacion: 1167
  },
  {
    dni: "80059829",
    nombre: "GALINDO NUÑEZ APARICIO",
    deuda: 2335.74,
    origen: "INTERBANK",
    oferta: 1611.15,
    monto_cancelacion: 1401
  },
  {
    dni: "3601624",
    nombre: "MENDOZA DE CELI TERESA",
    deuda: 2655.33,
    origen: "INTERBANK",
    oferta: 1831.95,
    monto_cancelacion: 1593
  },
  {
    dni: "3897764",
    nombre: "GONZALES SERNAQUE MARIA DE LOURDES",
    deuda: 1754.61,
    origen: "INTERBANK",
    oferta: 1210.95,
    monto_cancelacion: 1053
  },
  {
    dni: "9714612",
    nombre: "TOLEDO VITO FREDY JESUS",
    deuda: 2127.67,
    origen: "INTERBANK",
    oferta: 1468.55,
    monto_cancelacion: 1277
  },
  {
    dni: "10764678",
    nombre: "CRUZADO GARGUREVICH NELSON MARIANO",
    deuda: 1708.93,
    origen: "INTERBANK",
    oferta: 1178.75,
    monto_cancelacion: 1025
  },
  {
    dni: "45142627",
    nombre: "CLEOTILDE ISABEL GUERRERO ALARCON",
    deuda: 4543.29,
    origen: "INTERBANK",
    oferta: 3134.9,
    monto_cancelacion: 2726
  },
  {
    dni: "72463393",
    nombre: "CENTENO CORONADO GIAN MICHAEL",
    deuda: 1023.49,
    origen: "INTERBANK",
    oferta: 706.1,
    monto_cancelacion: 614
  },
  {
    dni: "74455469",
    nombre: "TAPIA ORTIZ ISAC ENRIQUE",
    deuda: 1491.3,
    origen: "INTERBANK",
    oferta: 1029.25,
    monto_cancelacion: 895
  },
  {
    dni: "77217292",
    nombre: "MEZA GUERRERO LUIS EDUARDO",
    deuda: 1321.51,
    origen: "INTERBANK",
    oferta: 911.95,
    monto_cancelacion: 793
  },
  {
    dni: "7090687",
    nombre: "SANCHEZ DE YAURI MARIA DOLORES",
    deuda: 1180.41,
    origen: "INTERBANK",
    oferta: 814.2,
    monto_cancelacion: 708
  },
  {
    dni: "7142993",
    nombre: "VASQUEZ GUTIERREZ DE MOGOLLO LOURDES DEL PILAR",
    deuda: 1775.38,
    origen: "INTERBANK",
    oferta: 1224.75,
    monto_cancelacion: 1065
  },
  {
    dni: "9129233",
    nombre: "ALEJO CRUZ CLEMENTE",
    deuda: 1615.04,
    origen: "INTERBANK",
    oferta: 1114.35,
    monto_cancelacion: 969
  },
  {
    dni: "10030518",
    nombre: "RODRIGUEZ ASTO JULIA SANTOS",
    deuda: 1602.6,
    origen: "INTERBANK",
    oferta: 1106.3,
    monto_cancelacion: 962
  },
  {
    dni: "18856359",
    nombre: "PASTOR MIRANDA DEISY ROSA",
    deuda: 1387.51,
    origen: "INTERBANK",
    oferta: 957.95,
    monto_cancelacion: 833
  },
  {
    dni: "22270840",
    nombre: "ZUAZO URIBE NELLY SUSANA",
    deuda: 1049.05,
    origen: "INTERBANK",
    oferta: 723.35,
    monto_cancelacion: 629
  },
  {
    dni: "22485776",
    nombre: "INGA SEGURA JANET LILIAN",
    deuda: 9421.09,
    origen: "INTERBANK",
    oferta: 6500.95,
    monto_cancelacion: 5653
  },
  {
    dni: "25442028",
    nombre: "VELEZ PRIETO DAVID GABRIEL",
    deuda: 1840.73,
    origen: "INTERBANK",
    oferta: 1269.6,
    monto_cancelacion: 1104
  },
  {
    dni: "29655286",
    nombre: "RIVERA MONTESINOS NESTOR",
    deuda: 1054.66,
    origen: "INTERBANK",
    oferta: 727.95,
    monto_cancelacion: 633
  },
  {
    dni: "41192678",
    nombre: "MARTINEZ HUANAY ALBERT",
    deuda: 6492.02,
    origen: "INTERBANK",
    oferta: 4479.25,
    monto_cancelacion: 3895
  },
  {
    dni: "41242351",
    nombre: "ZUÑIGA LAYZA MARLENE MARIBEL",
    deuda: 1053.83,
    origen: "INTERBANK",
    oferta: 726.8,
    monto_cancelacion: 632
  },
  {
    dni: "41851893",
    nombre: "CARDENAS CANCHARI EDUARDO GUILLERMO",
    deuda: 1991.19,
    origen: "INTERBANK",
    oferta: 1374.25,
    monto_cancelacion: 1195
  },
  {
    dni: "41980863",
    nombre: "LINGAN MORI DAVID",
    deuda: 1779.01,
    origen: "INTERBANK",
    oferta: 1227.05,
    monto_cancelacion: 1067
  },
  {
    dni: "42775975",
    nombre: "ALFARO BALTODANO ERIKA MARILU",
    deuda: 24728.629999999997,
    origen: "INTERBANK",
    oferta: 17062.55,
    monto_cancelacion: 14837
  },
  {
    dni: "44220126",
    nombre: "BASILIO RAMOS JOSE ARMANDO",
    deuda: 1545.44,
    origen: "INTERBANK",
    oferta: 1066.05,
    monto_cancelacion: 927
  },
  {
    dni: "44732882",
    nombre: "RETUERTO SALAZAR WILMER RAUL",
    deuda: 1689.55,
    origen: "INTERBANK",
    oferta: 1166.1,
    monto_cancelacion: 1014
  },
  {
    dni: "45416561",
    nombre: "IRIARTE VACCARO ROMINA",
    deuda: 1827.12,
    origen: "INTERBANK",
    oferta: 1260.4,
    monto_cancelacion: 1096
  },
  {
    dni: "46098729",
    nombre: "SILVA LOLAS CRISTIAN",
    deuda: 2680.83,
    origen: "INTERBANK",
    oferta: 1849.2,
    monto_cancelacion: 1608
  },
  {
    dni: "46482163",
    nombre: "LUNA GONZALES WALTER JOSE",
    deuda: 1180.23,
    origen: "INTERBANK",
    oferta: 814.2,
    monto_cancelacion: 708
  },
  {
    dni: "48079210",
    nombre: "CHUMPITAZ SARANGO CARLA",
    deuda: 1089.72,
    origen: "INTERBANK",
    oferta: 752.1,
    monto_cancelacion: 654
  },
  {
    dni: "70008341",
    nombre: "MUNAYCO ASTOQUILCA CARMEN HAYDEE",
    deuda: 1356.45,
    origen: "INTERBANK",
    oferta: 936.1,
    monto_cancelacion: 814
  },
  {
    dni: "72710669",
    nombre: "SIGNORI PAREDES NICOLA",
    deuda: 1306.69,
    origen: "INTERBANK",
    oferta: 901.6,
    monto_cancelacion: 784
  },
  {
    dni: "72895552",
    nombre: "ZAPANA LIMA ROBERTH GIANMARCO",
    deuda: 1445.07,
    origen: "INTERBANK",
    oferta: 997.05,
    monto_cancelacion: 867
  },
  {
    dni: "74444015",
    nombre: "CORDOVA VENTURA LUIS EDUARDO",
    deuda: 2369.2,
    origen: "INTERBANK",
    oferta: 1635.3,
    monto_cancelacion: 1422
  },
  {
    dni: "8674353",
    nombre: "MONZON SEGURA JHONNY LUCIO",
    deuda: 2951.36,
    origen: "INTERBANK",
    oferta: 1697.4,
    monto_cancelacion: 1476
  },
  {
    dni: "40623539",
    nombre: "RUIZ VALLES BERNERIO MAX",
    deuda: 2202.52,
    origen: "INTERBANK",
    oferta: 1266.15,
    monto_cancelacion: 1101
  },
  {
    dni: "42952035",
    nombre: "ABARCA RIOS PEDRO CARLOS",
    deuda: 20364.56,
    origen: "INTERBANK",
    oferta: 11709.3,
    monto_cancelacion: 10182
  },
  {
    dni: "45150312",
    nombre: "ZAPATA GONZAGA KATHIA DANIELA",
    deuda: 9874.13,
    origen: "INTERBANK",
    oferta: 5677.55,
    monto_cancelacion: 4937
  },
  {
    dni: "46474127",
    nombre: "GONZALES CORAL MARLENI BEATRIZ",
    deuda: 1067.43,
    origen: "INTERBANK",
    oferta: 614.1,
    monto_cancelacion: 534
  },
  {
    dni: "76582517",
    nombre: "ALARCON FERNANDEZ CARMEN ROSA",
    deuda: 1592.91,
    origen: "INTERBANK",
    oferta: 915.4,
    monto_cancelacion: 796
  },
  {
    dni: "1160763",
    nombre: "VILDOSO CESAR AUGUSTO BART",
    deuda: 2988.9300000000003,
    origen: "INTERBANK",
    oferta: 1718.1,
    monto_cancelacion: 1494
  },
  {
    dni: "2413632",
    nombre: "SALAS HUAYLLAPUMA ALCIDES",
    deuda: 1242.0,
    origen: "INTERBANK",
    oferta: 714.15,
    monto_cancelacion: 621
  },
  {
    dni: "6813334",
    nombre: "ROJAS VENTURO SANTOS ANGELA",
    deuda: 1405.5,
    origen: "INTERBANK",
    oferta: 808.45,
    monto_cancelacion: 703
  },
  {
    dni: "7137559",
    nombre: "JUSTO CABRERA SIGIFREDO AGAPITO",
    deuda: 2468.15,
    origen: "INTERBANK",
    oferta: 1419.1,
    monto_cancelacion: 1234
  },
  {
    dni: "8143545",
    nombre: "HERMOSA AGUILERA FLOR DE MARIA",
    deuda: 6768.06,
    origen: "INTERBANK",
    oferta: 3891.6,
    monto_cancelacion: 3384
  },
  {
    dni: "10631127",
    nombre: "VIVANCO PAREDES JIMMY OMAR",
    deuda: 1474.84,
    origen: "INTERBANK",
    oferta: 847.55,
    monto_cancelacion: 737
  },
  {
    dni: "15720723",
    nombre: "HERRERA RAMIREZ RICHARD ALDO",
    deuda: 1901.45,
    origen: "INTERBANK",
    oferta: 1093.65,
    monto_cancelacion: 951
  },
  {
    dni: "18029123",
    nombre: "RAYMUNDO FERNANDEZ ESPERANZA OLIVA",
    deuda: 2199.73,
    origen: "INTERBANK",
    oferta: 1265.0,
    monto_cancelacion: 1100
  },
  {
    dni: "18861719",
    nombre: "JUSTINIANO CASANOVA LUIS HUMBERTO",
    deuda: 4462.29,
    origen: "INTERBANK",
    oferta: 2565.65,
    monto_cancelacion: 2231
  },
  {
    dni: "22184480",
    nombre: "MALQUI CONTRERAS JESUS JUAN",
    deuda: 1552.27,
    origen: "INTERBANK",
    oferta: 892.4,
    monto_cancelacion: 776
  },
  {
    dni: "29717903",
    nombre: "ESCALANTE TORRES ELIZABETH NATY",
    deuda: 2772.35,
    origen: "INTERBANK",
    oferta: 1593.9,
    monto_cancelacion: 1386
  },
  {
    dni: "31626522",
    nombre: "ANGELES YAURI FERNANDO ANIBAL",
    deuda: 2386.39,
    origen: "INTERBANK",
    oferta: 1371.95,
    monto_cancelacion: 1193
  },
  {
    dni: "32962395",
    nombre: "RIVERA ALDANA JULIA AMPARO",
    deuda: 7031.87,
    origen: "RIPLEY",
    oferta: 4043.4,
    monto_cancelacion: 3516
  },
  {
    dni: "33591276",
    nombre: "BARDALES PEREZ YOLANDA",
    deuda: 1579.0,
    origen: "INTERBANK",
    oferta: 908.5,
    monto_cancelacion: 790
  },
  {
    dni: "40001808",
    nombre: "GUZMAN JIMENEZ MARIELA JUDITH",
    deuda: 9840.25,
    origen: "INTERBANK",
    oferta: 5658.0,
    monto_cancelacion: 4920
  },
  {
    dni: "40287784",
    nombre: "FELIPA ANCHANTE CARLOS ENRIQUE",
    deuda: 1034.7,
    origen: "INTERBANK",
    oferta: 594.55,
    monto_cancelacion: 517
  },
  {
    dni: "40696887",
    nombre: "VARGAS CHECYA RICHARD",
    deuda: 1795.88,
    origen: "INTERBANK",
    oferta: 1032.7,
    monto_cancelacion: 898
  },
  {
    dni: "41035185",
    nombre: "CUEVA ROJAS PATRICIO FRANK",
    deuda: 2842.01,
    origen: "INTERBANK",
    oferta: 1634.15,
    monto_cancelacion: 1421
  },
  {
    dni: "41255607",
    nombre: "AGUILAR RUBIO JOHAN MARCELINO",
    deuda: 1029.53,
    origen: "INTERBANK",
    oferta: 592.25,
    monto_cancelacion: 515
  },
  {
    dni: "41715746",
    nombre: "ALEJOS ROJAS ANIBAL",
    deuda: 22500.11,
    origen: "INTERBANK",
    oferta: 12937.5,
    monto_cancelacion: 11250
  },
  {
    dni: "42700851",
    nombre: "SANCHEZ GARCIA MITSI LISENIA",
    deuda: 1137.92,
    origen: "INTERBANK",
    oferta: 654.35,
    monto_cancelacion: 569
  },
  {
    dni: "42764165",
    nombre: "NIMA IPANAQUE ROXANA",
    deuda: 7970.37,
    origen: "INTERBANK",
    oferta: 4582.75,
    monto_cancelacion: 3985
  },
  {
    dni: "42996504",
    nombre: "PEÑA HUARANCA ELIZABETH",
    deuda: 4022.58,
    origen: "INTERBANK",
    oferta: 2312.65,
    monto_cancelacion: 2011
  },
  {
    dni: "43067367",
    nombre: "SANCHEZ CASTILLO OLENKA OFELIA",
    deuda: 4224.52,
    origen: "INTERBANK",
    oferta: 2428.8,
    monto_cancelacion: 2112
  },
  {
    dni: "43450827",
    nombre: "VERGARA BARRIOS SAMIRAH FIORELLA",
    deuda: 3589.4,
    origen: "INTERBANK",
    oferta: 2064.25,
    monto_cancelacion: 1795
  },
  {
    dni: "45264516",
    nombre: "ARIAS RETUERTO ERICK WILMER",
    deuda: 9700.14,
    origen: "INTERBANK",
    oferta: 5577.5,
    monto_cancelacion: 4850
  },
  {
    dni: "45515359",
    nombre: "MENDOZA CISNEROS ITALO PAUL",
    deuda: 1029.66,
    origen: "INTERBANK",
    oferta: 592.25,
    monto_cancelacion: 515
  },
  {
    dni: "45878231",
    nombre: "CIERTO MARTIN FREDY FELIX",
    deuda: 2024.5,
    origen: "INTERBANK",
    oferta: 1163.8,
    monto_cancelacion: 1012
  },
  {
    dni: "46118731",
    nombre: "VARGAS HUAMAN OLGA",
    deuda: 2544.75,
    origen: "INTERBANK",
    oferta: 1462.8,
    monto_cancelacion: 1272
  },
  {
    dni: "46946897",
    nombre: "TAPAYURI MURAYARI ROSA MARIA",
    deuda: 4744.0,
    origen: "INTERBANK",
    oferta: 2727.8,
    monto_cancelacion: 2372
  },
  {
    dni: "47489885",
    nombre: "HUANCA APAZA GABY ELEANA",
    deuda: 1747.18,
    origen: "INTERBANK",
    oferta: 1005.1,
    monto_cancelacion: 874
  },
  {
    dni: "47618297",
    nombre: "PEREZ GORDILLO ANGEL HUBERDINO",
    deuda: 6850.51,
    origen: "INTERBANK",
    oferta: 3938.75,
    monto_cancelacion: 3425
  },
  {
    dni: "47698275",
    nombre: "ARRIBASPLATA PONTE RUBEN LEONEL",
    deuda: 1360.9,
    origen: "INTERBANK",
    oferta: 782.0,
    monto_cancelacion: 680
  },
  {
    dni: "70613865",
    nombre: "DE LA CRUZ DOMINGUEZ WILLIAMS FELIPE",
    deuda: 4189.54,
    origen: "INTERBANK",
    oferta: 2409.25,
    monto_cancelacion: 2095
  },
  {
    dni: "80136923",
    nombre: "VASQUEZ ALAYO CARLOS ALBERTO",
    deuda: 11208.06,
    origen: "INTERBANK",
    oferta: 6444.6,
    monto_cancelacion: 5604
  },
  {
    dni: "80470249",
    nombre: "VASQUEZ SANCHEZ CARLOS JHONSTON",
    deuda: 3445.31,
    origen: "INTERBANK",
    oferta: 1981.45,
    monto_cancelacion: 1723
  },
  {
    dni: "80590317",
    nombre: "VILLANUEVA MELGAREJO ANTONIO CARLOS",
    deuda: 2976.24,
    origen: "INTERBANK",
    oferta: 1711.2,
    monto_cancelacion: 1488
  },
  {
    dni: "7662270",
    nombre: "CAÑARI BALDEON SARA OLLANTINA",
    deuda: 1434.77,
    origen: "INTERBANK",
    oferta: 824.55,
    monto_cancelacion: 717
  },
  {
    dni: "9404786",
    nombre: "FLORES REYES IVAN EDDY",
    deuda: 2097.68,
    origen: "INTERBANK",
    oferta: 1206.35,
    monto_cancelacion: 1049
  },
  {
    dni: "9604520",
    nombre: "ROJAS LARREA DORIS EDILMA",
    deuda: 1946.44,
    origen: "INTERBANK",
    oferta: 1118.95,
    monto_cancelacion: 973
  },
  {
    dni: "10662171",
    nombre: "HUAMANCHA PILLACA MANUEL AMERICO",
    deuda: 1469.23,
    origen: "INTERBANK",
    oferta: 845.25,
    monto_cancelacion: 735
  },
  {
    dni: "41240584",
    nombre: "GARCIA CHOTA DANNY",
    deuda: 1582.44,
    origen: "INTERBANK",
    oferta: 909.65,
    monto_cancelacion: 791
  },
  {
    dni: "46528281",
    nombre: "SANCHEZ HERRERA ANDREA PATRICIA",
    deuda: 2609.0,
    origen: "INTERBANK",
    oferta: 1500.75,
    monto_cancelacion: 1305
  },
  {
    dni: "70855900",
    nombre: "SERRANO BRINGAS ROBERTA ALEJANDRA",
    deuda: 2587.88,
    origen: "INTERBANK",
    oferta: 1488.1,
    monto_cancelacion: 1294
  },
  {
    dni: "16794646",
    nombre: "DE LA ROSA DIAZ CARMEN ALICIA",
    deuda: 1168.97,
    origen: "INTERBANK",
    oferta: 671.6,
    monto_cancelacion: 584
  },
  {
    dni: "19331996",
    nombre: "JOSE ALEXANDER VARGAS QUISPE",
    deuda: 5485.2,
    origen: "INTERBANK",
    oferta: 3154.45,
    monto_cancelacion: 2743
  },
  {
    dni: "25840577",
    nombre: "PERLA ECHEVARRIA LUCY FLOR",
    deuda: 7219.42,
    origen: "INTERBANK",
    oferta: 4151.5,
    monto_cancelacion: 3610
  },
  {
    dni: "40883528",
    nombre: "CUBAS BLANCO ELVER OMAR",
    deuda: 7611.06,
    origen: "INTERBANK",
    oferta: 4376.9,
    monto_cancelacion: 3806
  },
  {
    dni: "41524591",
    nombre: "ALEX FREDDY HUANCA PASACA",
    deuda: 1424.0500000000002,
    origen: "INTERBANK",
    oferta: 818.8,
    monto_cancelacion: 712
  },
  {
    dni: "42271496",
    nombre: "RUIZ BEJARANO CARLOS MANUEL",
    deuda: 1104.85,
    origen: "INTERBANK",
    oferta: 634.8,
    monto_cancelacion: 552
  },
  {
    dni: "42573427",
    nombre: "VILLA VALLES VERONICA DEL PILAR",
    deuda: 15821.509999999998,
    origen: "INTERBANK",
    oferta: 9097.65,
    monto_cancelacion: 7911
  },
  {
    dni: "42658369",
    nombre: "HIDALGO COTERA CESAR RAUL",
    deuda: 15396.58,
    origen: "INTERBANK",
    oferta: 8852.7,
    monto_cancelacion: 7698
  },
  {
    dni: "42963766",
    nombre: "CAMPOS RUERO GIOVANNA ELIZABETH",
    deuda: 5280.39,
    origen: "INTERBANK",
    oferta: 3036.0,
    monto_cancelacion: 2640
  },
  {
    dni: "46098056",
    nombre: "SERRANO ABANTO LUIS JONATHAN",
    deuda: 7028.65,
    origen: "INTERBANK",
    oferta: 4041.1,
    monto_cancelacion: 3514
  },
  {
    dni: "46515896",
    nombre: "CORAL ELIAS RUTH EVELIN",
    deuda: 1007.31,
    origen: "INTERBANK",
    oferta: 579.6,
    monto_cancelacion: 504
  },
  {
    dni: "70150153",
    nombre: "DANOS VIZCARDO ROCIO MARIBEL",
    deuda: 1025.6,
    origen: "INTERBANK",
    oferta: 589.95,
    monto_cancelacion: 513
  },
  {
    dni: "72103372",
    nombre: "LOZADA TERRONES ETHEL PAOLA",
    deuda: 1863.2,
    origen: "INTERBANK",
    oferta: 1071.8,
    monto_cancelacion: 932
  },
  {
    dni: "72201079",
    nombre: "URIBE MEZA LESLIE ESTEFANIA",
    deuda: 1757.51,
    origen: "INTERBANK",
    oferta: 1010.85,
    monto_cancelacion: 879
  },
  {
    dni: "74726952",
    nombre: "GUTIERREZ GOMEZ JORGE CARLO",
    deuda: 1014.29,
    origen: "INTERBANK",
    oferta: 583.05,
    monto_cancelacion: 507
  },
  {
    dni: "7159282",
    nombre: "BERMEJO MUÑOZ MARIA DEL ROSARIO",
    deuda: 3859.96,
    origen: "RIPLEY",
    oferta: 2219.5,
    monto_cancelacion: 1930
  },
  {
    dni: "41279571",
    nombre: "PINEDO MEZA CIRO FRANCISCO",
    deuda: 9805.78,
    origen: "INTERBANK",
    oferta: 5638.45,
    monto_cancelacion: 4903
  },
  {
    dni: "42613992",
    nombre: "SALVADOR GUZMAN MERLINDA MEDELI",
    deuda: 9972.81,
    origen: "INTERBANK",
    oferta: 5733.9,
    monto_cancelacion: 4986
  },
  {
    dni: "44175126",
    nombre: "GUERRERO ALARCON KATHERINE",
    deuda: 8946.15,
    origen: "INTERBANK",
    oferta: 5143.95,
    monto_cancelacion: 4473
  },
  {
    dni: "74433693",
    nombre: "YUNGANINA COLLANTES BRIGGHIT XIOMARA",
    deuda: 1300.86,
    origen: "INTERBANK",
    oferta: 747.5,
    monto_cancelacion: 650
  },
  {
    dni: "40896692",
    nombre: "QUIÑONES LOPEZ MANUEL EDUARDO",
    deuda: 2349.37,
    origen: "INTERBANK",
    oferta: 1351.25,
    monto_cancelacion: 1175
  },
  {
    dni: "43745685",
    nombre: "TUME LLONTOP MAYRA NADIR",
    deuda: 12610.199999999999,
    origen: "INTERBANK",
    oferta: 7250.75,
    monto_cancelacion: 6305
  },
  {
    dni: "1292529",
    nombre: "SANTOS MANTILLA RAUL ALFREDO",
    deuda: 1728.74,
    origen: "INTERBANK",
    oferta: 993.6,
    monto_cancelacion: 864
  },
  {
    dni: "2818649",
    nombre: "RAMIREZ FLOREANO EDGARD CELEDONI",
    deuda: 1772.39,
    origen: "INTERBANK",
    oferta: 1018.9,
    monto_cancelacion: 886
  },
  {
    dni: "6031798",
    nombre: "GOMEZ EYZAGUIRRE MIGUEL WALTER",
    deuda: 1004.53,
    origen: "INTERBANK",
    oferta: 577.3,
    monto_cancelacion: 502
  },
  {
    dni: "8958123",
    nombre: "BOHORQUEZ VALDEZ DE PISCOYA MARIA DEL CARMEN",
    deuda: 6410.56,
    origen: "INTERBANK",
    oferta: 3685.75,
    monto_cancelacion: 3205
  },
  {
    dni: "44086865",
    nombre: "HUIMAN SEMINARIO MARCO ISAIAS",
    deuda: 2007.9,
    origen: "INTERBANK",
    oferta: 1154.6,
    monto_cancelacion: 1004
  },
  {
    dni: "44660753",
    nombre: "DE LOS SANTOS CARRILLO NOEMI LASTENIA",
    deuda: 7256.58,
    origen: "INTERBANK",
    oferta: 4172.2,
    monto_cancelacion: 3628
  },
  {
    dni: "44841689",
    nombre: "MARTINEZ VILLAJUAN CARLOS AMADOR",
    deuda: 8851.34,
    origen: "INTERBANK",
    oferta: 5089.9,
    monto_cancelacion: 4426
  },
  {
    dni: "44934687",
    nombre: "ODIAGA PEÑA DANIEL",
    deuda: 1607.93,
    origen: "INTERBANK",
    oferta: 924.6,
    monto_cancelacion: 804
  },
  {
    dni: "47340442",
    nombre: "EULOGIO QUINTANILLA JOSUE MIGUEL",
    deuda: 2182.75,
    origen: "INTERBANK",
    oferta: 1254.65,
    monto_cancelacion: 1091
  },
  {
    dni: "48682915",
    nombre: "REMAYCUNA TOCTO ELVIS JAIRITO",
    deuda: 1584.28,
    origen: "INTERBANK",
    oferta: 910.8,
    monto_cancelacion: 792
  },
  {
    dni: "72210968",
    nombre: "CAHUATA CORRALES YOSHUAR BRAYAN",
    deuda: 1328.04,
    origen: "INTERBANK",
    oferta: 763.6,
    monto_cancelacion: 664
  },
  {
    dni: "3581466",
    nombre: "CASTILLO NIÑO DE CRISANTO CARMEN",
    deuda: 6582.03,
    origen: "INTERBANK",
    oferta: 3784.65,
    monto_cancelacion: 3291
  },
  {
    dni: "6067574",
    nombre: "ROSADO CAILLAHUA ALEX PEDRO",
    deuda: 9261.37,
    origen: "INTERBANK",
    oferta: 5325.65,
    monto_cancelacion: 4631
  },
  {
    dni: "6928747",
    nombre: "LUNA QUISPE JUDITH MILAGRO",
    deuda: 2645.02,
    origen: "INTERBANK",
    oferta: 1521.45,
    monto_cancelacion: 1323
  },
  {
    dni: "8109876",
    nombre: "YAURIVILCA NAPAN DANIEL MARTIN",
    deuda: 6038.11,
    origen: "INTERBANK",
    oferta: 3471.85,
    monto_cancelacion: 3019
  },
  {
    dni: "8311638",
    nombre: "ESPINOZA CORDOVA ORLANDO JESUS",
    deuda: 1014.08,
    origen: "INTERBANK",
    oferta: 583.05,
    monto_cancelacion: 507
  },
  {
    dni: "8847742",
    nombre: "CASTILLON BRUSIL RAFAEL MARIO",
    deuda: 3932.18,
    origen: "INTERBANK",
    oferta: 2260.9,
    monto_cancelacion: 1966
  },
  {
    dni: "9047657",
    nombre: "OBLITAS SANEZ DAVID",
    deuda: 1337.48,
    origen: "INTERBANK",
    oferta: 769.35,
    monto_cancelacion: 669
  },
  {
    dni: "9286258",
    nombre: "YESAN HUANCA EDWIN MIGUEL",
    deuda: 7094.81,
    origen: "INTERBANK",
    oferta: 4079.05,
    monto_cancelacion: 3547
  },
  {
    dni: "9792721",
    nombre: "PRUDENCIO HIGINIO CARLOS ALBERTO",
    deuda: 7034.22,
    origen: "INTERBANK",
    oferta: 4044.55,
    monto_cancelacion: 3517
  },
  {
    dni: "9938633",
    nombre: "ASENCIOS GARNICA JUAN PABLO",
    deuda: 2865.59,
    origen: "INTERBANK",
    oferta: 1647.95,
    monto_cancelacion: 1433
  },
  {
    dni: "10149606",
    nombre: "LUQUE APONTE LUIS GILL",
    deuda: 3087.17,
    origen: "INTERBANK",
    oferta: 1775.6,
    monto_cancelacion: 1544
  },
  {
    dni: "10179030",
    nombre: "CASTRO SALAZAR ULISES MIGUEL",
    deuda: 1730.42,
    origen: "INTERBANK",
    oferta: 994.75,
    monto_cancelacion: 865
  },
  {
    dni: "10685840",
    nombre: "SALDAÑA TINEO PERCY ANDRES",
    deuda: 1331.79,
    origen: "INTERBANK",
    oferta: 765.9,
    monto_cancelacion: 666
  },
  {
    dni: "10743576",
    nombre: "BOZA LOAYZA JOSE MANUEL",
    deuda: 1501.0,
    origen: "INTERBANK",
    oferta: 863.65,
    monto_cancelacion: 751
  },
  {
    dni: "15667782",
    nombre: "CASTRO HUAMAN ROSA ENRIQUETA",
    deuda: 1404.32,
    origen: "INTERBANK",
    oferta: 807.3,
    monto_cancelacion: 702
  },
  {
    dni: "15757428",
    nombre: "SAAVEDRA MORI ALEJANDRO GERMAN",
    deuda: 2516.16,
    origen: "INTERBANK",
    oferta: 1446.7,
    monto_cancelacion: 1258
  },
  {
    dni: "16712666",
    nombre: "DAVILA CABALLERO EVA SUSI",
    deuda: 1557.27,
    origen: "INTERBANK",
    oferta: 895.85,
    monto_cancelacion: 779
  },
  {
    dni: "18167331",
    nombre: "CARRANZA ESCOBEDO GIOVANNA LUZ",
    deuda: 3797.5,
    origen: "INTERBANK",
    oferta: 2183.85,
    monto_cancelacion: 1899
  },
  {
    dni: "19234170",
    nombre: "BAZAN SALCEDO MARIA IRENE",
    deuda: 1299.23,
    origen: "INTERBANK",
    oferta: 747.5,
    monto_cancelacion: 650
  },
  {
    dni: "21142197",
    nombre: "GARCIA GONZALVEZ JOSE REYES",
    deuda: 1957.9299999999998,
    origen: "RIPLEY",
    oferta: 1125.85,
    monto_cancelacion: 979
  },
  {
    dni: "21425656",
    nombre: "HERNANDEZ GRILLO ANA ESMELY",
    deuda: 8654.46,
    origen: "INTERBANK",
    oferta: 4976.05,
    monto_cancelacion: 4327
  },
  {
    dni: "25749202",
    nombre: "DE LA PUENTE RIOS NERIDA MARIA",
    deuda: 2500.2,
    origen: "INTERBANK",
    oferta: 1437.5,
    monto_cancelacion: 1250
  },
  {
    dni: "29662330",
    nombre: "VARGAS ORTEGA JULIO ELEAZAR",
    deuda: 4459.47,
    origen: "INTERBANK",
    oferta: 2564.5,
    monto_cancelacion: 2230
  },
  {
    dni: "40136326",
    nombre: "HENDRIK ALLEMANT PRINCE",
    deuda: 5613.67,
    origen: "INTERBANK",
    oferta: 3228.05,
    monto_cancelacion: 2807
  },
  {
    dni: "40503605",
    nombre: "RODRIGUEZ QUISPE ROBERTO",
    deuda: 6641.55,
    origen: "INTERBANK",
    oferta: 3819.15,
    monto_cancelacion: 3321
  },
  {
    dni: "40635613",
    nombre: "GALVEZ MEDINA CARMEN ROXANA",
    deuda: 1104.72,
    origen: "INTERBANK",
    oferta: 634.8,
    monto_cancelacion: 552
  },
  {
    dni: "40931499",
    nombre: "SANCHEZ PAUCAR SOLEDAD AMALIA",
    deuda: 5137.0,
    origen: "INTERBANK",
    oferta: 2954.35,
    monto_cancelacion: 2569
  },
  {
    dni: "41132147",
    nombre: "VASQUEZ DIAZ NOEMI VIVIANA",
    deuda: 2792.97,
    origen: "INTERBANK",
    oferta: 1605.4,
    monto_cancelacion: 1396
  },
  {
    dni: "41220554",
    nombre: "RIVERA AYALA JAIME RUBEN",
    deuda: 8087.38,
    origen: "INTERBANK",
    oferta: 4650.6,
    monto_cancelacion: 4044
  },
  {
    dni: "41260365",
    nombre: "DEL RIO CERDA RENZO EDINSON",
    deuda: 7096.450000000001,
    origen: "INTERBANK",
    oferta: 4080.2,
    monto_cancelacion: 3548
  },
  {
    dni: "42175249",
    nombre: "NAMUCHE VELASQUEZ MARIA ISABEL",
    deuda: 8891.1,
    origen: "INTERBANK",
    oferta: 5112.9,
    monto_cancelacion: 4446
  },
  {
    dni: "42320586",
    nombre: "RAMIRO BERNILLA CAJO",
    deuda: 2817.75,
    origen: "INTERBANK",
    oferta: 1620.35,
    monto_cancelacion: 1409
  },
  {
    dni: "42756648",
    nombre: "JEAN PETER BURGOS QUEZADA",
    deuda: 7909.5599999999995,
    origen: "BANCO FALABELLA",
    oferta: 4548.25,
    monto_cancelacion: 3955
  },
  {
    dni: "43287635",
    nombre: "CORDOVA MAMANI EDILBERTO CARLOS",
    deuda: 9127.33,
    origen: "INTERBANK",
    oferta: 5248.6,
    monto_cancelacion: 4564
  },
  {
    dni: "43301758",
    nombre: "KEVANS GARCIA GUILLERMO STEPHE",
    deuda: 1618.55,
    origen: "INTERBANK",
    oferta: 930.35,
    monto_cancelacion: 809
  },
  {
    dni: "43533047",
    nombre: "OLIVERA ZEVALLOS JOSHELIM PAMELA",
    deuda: 7233.89,
    origen: "INTERBANK",
    oferta: 4159.55,
    monto_cancelacion: 3617
  },
  {
    dni: "43660660",
    nombre: "ROJAS CALISAYA JUAN CARLOS",
    deuda: 1268.47,
    origen: "INTERBANK",
    oferta: 729.1,
    monto_cancelacion: 634
  },
  {
    dni: "44016627",
    nombre: "DE LA CRUZ RAMIREZ JENY JANINA",
    deuda: 5829.23,
    origen: "RIPLEY",
    oferta: 3352.25,
    monto_cancelacion: 2915
  },
  {
    dni: "44114204",
    nombre: "TELLO YACHA ENOC",
    deuda: 1827.31,
    origen: "INTERBANK",
    oferta: 1051.1,
    monto_cancelacion: 914
  },
  {
    dni: "44481980",
    nombre: "ALIAGA IBARRA MAYA GLADYS",
    deuda: 26443.39,
    origen: "INTERBANK",
    oferta: 15205.3,
    monto_cancelacion: 13222
  },
  {
    dni: "44556876",
    nombre: "LAPA NOLASCO CARLOS ALBERTO",
    deuda: 1625.43,
    origen: "INTERBANK",
    oferta: 934.95,
    monto_cancelacion: 813
  },
  {
    dni: "44799260",
    nombre: "CALVO SALVATIERRA WILMER JESUS",
    deuda: 2771.39,
    origen: "INTERBANK",
    oferta: 1593.9,
    monto_cancelacion: 1386
  },
  {
    dni: "45342849",
    nombre: "VILLANUEVA FERNANDEZ GEORGE ANIBAL",
    deuda: 2107.5,
    origen: "INTERBANK",
    oferta: 1212.1,
    monto_cancelacion: 1054
  },
  {
    dni: "45451735",
    nombre: "FLORES GUEVARA ERLY EMILY",
    deuda: 3436.4,
    origen: "INTERBANK",
    oferta: 1975.7,
    monto_cancelacion: 1718
  },
  {
    dni: "45873071",
    nombre: "GUTIERREZ CASTILLO ROSA ELIZABETH",
    deuda: 1056.0,
    origen: "INTERBANK",
    oferta: 607.2,
    monto_cancelacion: 528
  },
  {
    dni: "46383092",
    nombre: "LORENZO AGUILAR LINZOR",
    deuda: 9115.77,
    origen: "INTERBANK",
    oferta: 5241.7,
    monto_cancelacion: 4558
  },
  {
    dni: "46477720",
    nombre: "VILLARREAL SUBAUSTE MICHAEL ANTHONY",
    deuda: 1237.9,
    origen: "INTERBANK",
    oferta: 711.85,
    monto_cancelacion: 619
  },
  {
    dni: "46567291",
    nombre: "SALAZAR CAMACHO BEATRIZ MADELEINE",
    deuda: 1528.3,
    origen: "INTERBANK",
    oferta: 878.6,
    monto_cancelacion: 764
  },
  {
    dni: "46567540",
    nombre: "ESCALANTE QUICAÑO LUIS ALBERTO",
    deuda: 1052.41,
    origen: "INTERBANK",
    oferta: 604.9,
    monto_cancelacion: 526
  },
  {
    dni: "47134520",
    nombre: "FLORES RAMIREZ YENNIFER",
    deuda: 4702.7,
    origen: "INTERBANK",
    oferta: 2703.65,
    monto_cancelacion: 2351
  },
  {
    dni: "47527151",
    nombre: "HERNANDEZ CANO ESTEFANY BRISSEHT",
    deuda: 9503.82,
    origen: "INTERBANK",
    oferta: 5464.8,
    monto_cancelacion: 4752
  },
  {
    dni: "47658664",
    nombre: "LOZANO FIGUEROA MICHAEL",
    deuda: 4395.45,
    origen: "INTERBANK",
    oferta: 2527.7,
    monto_cancelacion: 2198
  },
  {
    dni: "47856786",
    nombre: "CANO GUTIERREZ VALERIA PAULA",
    deuda: 4772.15,
    origen: "INTERBANK",
    oferta: 2743.9,
    monto_cancelacion: 2386
  },
  {
    dni: "48020691",
    nombre: "RETTO LUPU KATHIA AEIMEE",
    deuda: 1528.97,
    origen: "INTERBANK",
    oferta: 878.6,
    monto_cancelacion: 764
  },
  {
    dni: "48801981",
    nombre: "CHEGNE CABELLO EFRAIN ROGER",
    deuda: 1485.16,
    origen: "INTERBANK",
    oferta: 854.45,
    monto_cancelacion: 743
  },
  {
    dni: "70064780",
    nombre: "ROQUE VIDAL MARTIN YONATAN",
    deuda: 5886.09,
    origen: "INTERBANK",
    oferta: 3384.45,
    monto_cancelacion: 2943
  },
  {
    dni: "70071262",
    nombre: "MARENGO APULLANCA MILCA SARAI",
    deuda: 1025.92,
    origen: "INTERBANK",
    oferta: 589.95,
    monto_cancelacion: 513
  },
  {
    dni: "70268609",
    nombre: "ARAMBULO PASTOR KEVIN JHERSON",
    deuda: 1070.55,
    origen: "INTERBANK",
    oferta: 615.25,
    monto_cancelacion: 535
  },
  {
    dni: "72183003",
    nombre: "NAVARRETE CAJO MARISEL SABINA",
    deuda: 2060.52,
    origen: "INTERBANK",
    oferta: 1184.5,
    monto_cancelacion: 1030
  },
  {
    dni: "72369857",
    nombre: "MENDEZ GONZALES ERNESTO MIJAIL",
    deuda: 1088.32,
    origen: "INTERBANK",
    oferta: 625.6,
    monto_cancelacion: 544
  },
  {
    dni: "72643404",
    nombre: "SANTIAGO BRAVO ELIEL",
    deuda: 2897.61,
    origen: "INTERBANK",
    oferta: 1666.35,
    monto_cancelacion: 1449
  },
  {
    dni: "73941362",
    nombre: "FLORES DIOSES YASMIN MIRELLI",
    deuda: 1060.91,
    origen: "INTERBANK",
    oferta: 609.5,
    monto_cancelacion: 530
  },
  {
    dni: "76051342",
    nombre: "ENCALADA PINTA MELISSA",
    deuda: 1382.07,
    origen: "INTERBANK",
    oferta: 794.65,
    monto_cancelacion: 691
  },
  {
    dni: "76791957",
    nombre: "RUIZ MUDARRA LUZ CLARITA",
    deuda: 1247.46,
    origen: "INTERBANK",
    oferta: 717.6,
    monto_cancelacion: 624
  },
  {
    dni: "80383412",
    nombre: "ARONI QUISPE GREDY GILBERT",
    deuda: 13184.93,
    origen: "INTERBANK",
    oferta: 7580.8,
    monto_cancelacion: 6592
  },
  {
    dni: "16632064",
    nombre: "MENDOZA SECLEN LUZ MAGDALENA",
    deuda: 1472.29,
    origen: "INTERBANK",
    oferta: 846.4,
    monto_cancelacion: 736
  },
  {
    dni: "16697590",
    nombre: "ORREGO GONZALES MARIA MAGDALENA",
    deuda: 2239.67,
    origen: "INTERBANK",
    oferta: 1288.0,
    monto_cancelacion: 1120
  },
  {
    dni: "17934678",
    nombre: "MENDOZA URRIAGA JULIO",
    deuda: 3479.03,
    origen: "INTERBANK",
    oferta: 2001.0,
    monto_cancelacion: 1740
  },
  {
    dni: "29375320",
    nombre: "VALDIGLESIAS CASAVERDE RODOLFO CESAR",
    deuda: 1403.3,
    origen: "INTERBANK",
    oferta: 807.3,
    monto_cancelacion: 702
  },
  {
    dni: "41053624",
    nombre: "FERRE AZABACHE CESAR ALBERTO",
    deuda: 2794.46,
    origen: "INTERBANK",
    oferta: 1606.55,
    monto_cancelacion: 1397
  },
  {
    dni: "41195145",
    nombre: "LUYO DIAZ CESAR AUGUSTO",
    deuda: 4710.53,
    origen: "INTERBANK",
    oferta: 2708.25,
    monto_cancelacion: 2355
  },
  {
    dni: "41248583",
    nombre: "PEREZ CARDENAS JAVIER GREGORIO",
    deuda: 6247.68,
    origen: "INTERBANK",
    oferta: 3592.6,
    monto_cancelacion: 3124
  },
  {
    dni: "41548932",
    nombre: "ROJAS ARRASCUE MARIA FLORMIRA",
    deuda: 2565.71,
    origen: "INTERBANK",
    oferta: 1475.45,
    monto_cancelacion: 1283
  },
  {
    dni: "42227350",
    nombre: "ZEGARRA PRADA SOLEDAD",
    deuda: 1495.9,
    origen: "INTERBANK",
    oferta: 860.2,
    monto_cancelacion: 748
  },
  {
    dni: "44185130",
    nombre: "LOZA HUAMAN KARIN GLORIA",
    deuda: 1400.51,
    origen: "INTERBANK",
    oferta: 805.0,
    monto_cancelacion: 700
  },
  {
    dni: "44466039",
    nombre: "QUISPE ALLENDE ROSARIO CRISTINA",
    deuda: 1206.91,
    origen: "INTERBANK",
    oferta: 693.45,
    monto_cancelacion: 603
  },
  {
    dni: "44591831",
    nombre: "LOZANO RUIZ ROSA YSABEL",
    deuda: 5381.09,
    origen: "RIPLEY",
    oferta: 3094.65,
    monto_cancelacion: 2691
  },
  {
    dni: "46571005",
    nombre: "CRUZ ARCE IVAN YAKSON",
    deuda: 17241.98,
    origen: "INTERBANK",
    oferta: 9914.15,
    monto_cancelacion: 8621
  },
  {
    dni: "46809504",
    nombre: "MEZA TORNERA GLADYS ANDREA",
    deuda: 2450.16,
    origen: "INTERBANK",
    oferta: 1408.75,
    monto_cancelacion: 1225
  },
  {
    dni: "46877416",
    nombre: "HUAYNA MENDOZA FREDDY ALONSO",
    deuda: 3783.57,
    origen: "INTERBANK",
    oferta: 2175.8,
    monto_cancelacion: 1892
  },
  {
    dni: "70882761",
    nombre: "INGA JAIME JOSE FERMIN",
    deuda: 1515.43,
    origen: "INTERBANK",
    oferta: 871.7,
    monto_cancelacion: 758
  },
  {
    dni: "71926608",
    nombre: "GARCIA CHERO GUILLERMO FELICIANO",
    deuda: 1109.63,
    origen: "INTERBANK",
    oferta: 638.25,
    monto_cancelacion: 555
  },
  {
    dni: "74153854",
    nombre: "ROA IBAÑEZ SERGIO HUMBERTO",
    deuda: 1437.38,
    origen: "INTERBANK",
    oferta: 826.85,
    monto_cancelacion: 719
  },
  {
    dni: "80687087",
    nombre: "PANAIFO PICOTA LIRIO",
    deuda: 1041.94,
    origen: "INTERBANK",
    oferta: 599.15,
    monto_cancelacion: 521
  },
  {
    dni: "3353306",
    nombre: "CALLE PEÑA TERESA",
    deuda: 1318.16,
    origen: "INTERBANK",
    oferta: 757.85,
    monto_cancelacion: 659
  },
  {
    dni: "8690080",
    nombre: "GLORIA MARIA CIEZA SALCEDO",
    deuda: 4723.9,
    origen: "BANCO FALABELLA",
    oferta: 2716.3,
    monto_cancelacion: 2362
  },
  {
    dni: "9095101",
    nombre: "TANTA FERNANDEZ PABLO",
    deuda: 7103.86,
    origen: "INTERBANK",
    oferta: 4084.8,
    monto_cancelacion: 3552
  },
  {
    dni: "16634444",
    nombre: "VILCHEZ LLUNCOR EDY",
    deuda: 2916.77,
    origen: "INTERBANK",
    oferta: 1676.7,
    monto_cancelacion: 1458
  },
  {
    dni: "16661291",
    nombre: "OLIVA SILVA MARIA ELENA",
    deuda: 19015.42,
    origen: "INTERBANK",
    oferta: 10934.2,
    monto_cancelacion: 9508
  },
  {
    dni: "41370019",
    nombre: "GUEVARA ABARCA DAYA VALESSA",
    deuda: 2440.29,
    origen: "INTERBANK",
    oferta: 1403.0,
    monto_cancelacion: 1220
  },
  {
    dni: "41711264",
    nombre: "ROBLES DEPAZ JULIO CESAR",
    deuda: 9551.26,
    origen: "INTERBANK",
    oferta: 5492.4,
    monto_cancelacion: 4776
  },
  {
    dni: "45863978",
    nombre: "CHAVEZ FLORES DAYAN ROXANA",
    deuda: 2375.61,
    origen: "INTERBANK",
    oferta: 1366.2,
    monto_cancelacion: 1188
  },
  {
    dni: "46231112",
    nombre: "CORNEJO CARRASCO MANUEL ANTONIO",
    deuda: 1900.41,
    origen: "INTERBANK",
    oferta: 1092.5,
    monto_cancelacion: 950
  },
  {
    dni: "46455078",
    nombre: "CHAVEZ HUAMAN YNGRID CHARLOTTE",
    deuda: 3671.19,
    origen: "INTERBANK",
    oferta: 2111.4,
    monto_cancelacion: 1836
  },
  {
    dni: "46814885",
    nombre: "MERA VARGAS BRANDO",
    deuda: 2062.09,
    origen: "INTERBANK",
    oferta: 1185.65,
    monto_cancelacion: 1031
  },
  {
    dni: "47746207",
    nombre: "SALAZAR SANTIAGO JEAN FRANCO",
    deuda: 1096.45,
    origen: "INTERBANK",
    oferta: 630.2,
    monto_cancelacion: 548
  },
  {
    dni: "48646527",
    nombre: "PEREZ AHUANARI ZOILA DEL CARMEN",
    deuda: 1725.85,
    origen: "INTERBANK",
    oferta: 992.45,
    monto_cancelacion: 863
  },
  {
    dni: "46179448",
    nombre: "CARBAJAL CARBAJAL NOYRE",
    deuda: 5561.9,
    origen: "INTERBANK",
    oferta: 3198.15,
    monto_cancelacion: 2781
  },
  {
    dni: "3869515",
    nombre: "MEDINA ZAPATA LUIS ALBERTO",
    deuda: 1943.78,
    origen: "INTERBANK",
    oferta: 1117.8,
    monto_cancelacion: 972
  },
  {
    dni: "6150489",
    nombre: "VARGAS MONTALVAN JORGE LUIS",
    deuda: 8961.0,
    origen: "INTERBANK",
    oferta: 5153.15,
    monto_cancelacion: 4481
  },
  {
    dni: "7232260",
    nombre: "NOBLECILLA MARTINEZ MEDARDO ENRIQUE",
    deuda: 2495.65,
    origen: "INTERBANK",
    oferta: 1435.2,
    monto_cancelacion: 1248
  },
  {
    dni: "7302935",
    nombre: "CABALLERO AVILES PEDRO EDUARDO",
    deuda: 1455.14,
    origen: "INTERBANK",
    oferta: 837.2,
    monto_cancelacion: 728
  },
  {
    dni: "7460021",
    nombre: "VILCA BERNUY CARLOS FRANCISCO",
    deuda: 1339.01,
    origen: "INTERBANK",
    oferta: 770.5,
    monto_cancelacion: 670
  },
  {
    dni: "15598501",
    nombre: "DIAZ FERNANDEZ ROMMY JACKELIN",
    deuda: 2244.52,
    origen: "INTERBANK",
    oferta: 1290.3,
    monto_cancelacion: 1122
  },
  {
    dni: "15740314",
    nombre: "VILLANUEVA ZAMBRANO EDITA ROCIO",
    deuda: 22221.100000000002,
    origen: "INTERBANK",
    oferta: 12777.65,
    monto_cancelacion: 11111
  },
  {
    dni: "16648288",
    nombre: "ZAPATA GUERRERO MARCELY ELIZABETH",
    deuda: 4084.76,
    origen: "INTERBANK",
    oferta: 2348.3,
    monto_cancelacion: 2042
  },
  {
    dni: "20593807",
    nombre: "PEÑA BARBOZA VICTORIA",
    deuda: 1310.23,
    origen: "INTERBANK",
    oferta: 753.25,
    monto_cancelacion: 655
  },
  {
    dni: "20906919",
    nombre: "PEDRO VELASQUEZ QUIQUIA",
    deuda: 6504.9800000000005,
    origen: "BCP",
    oferta: 3739.8,
    monto_cancelacion: 3252
  },
  {
    dni: "27731076",
    nombre: "SANCHEZ PEREZ ISAAC ANIBAL",
    deuda: 1825.38,
    origen: "INTERBANK",
    oferta: 1049.95,
    monto_cancelacion: 913
  },
  {
    dni: "32812528",
    nombre: "VALVERDE NUREÑA SOCORRO IDORIA",
    deuda: 4360.61,
    origen: "INTERBANK",
    oferta: 2507.0,
    monto_cancelacion: 2180
  },
  {
    dni: "40467616",
    nombre: "ZELADA JERI ANTONIO ALEXIS",
    deuda: 1395.42,
    origen: "INTERBANK",
    oferta: 802.7,
    monto_cancelacion: 698
  },
  {
    dni: "40500012",
    nombre: "LAZARO SALIRROSAS ROSA LIDUBINA",
    deuda: 2727.03,
    origen: "INTERBANK",
    oferta: 1568.6,
    monto_cancelacion: 1364
  },
  {
    dni: "40778783",
    nombre: "BASAURI FLORES JOHNY ALAN",
    deuda: 2501.88,
    origen: "INTERBANK",
    oferta: 1438.65,
    monto_cancelacion: 1251
  },
  {
    dni: "41112867",
    nombre: "CRISPIN PORTALATINO SONIA MARIELA",
    deuda: 3407.05,
    origen: "INTERBANK",
    oferta: 1959.6,
    monto_cancelacion: 1704
  },
  {
    dni: "41115445",
    nombre: "MUÑOZ CAMONES JULIO JESUS",
    deuda: 9046.93,
    origen: "INTERBANK",
    oferta: 5201.45,
    monto_cancelacion: 4523
  },
  {
    dni: "41349033",
    nombre: "CAPA MEDINA MANUEL JESUS",
    deuda: 2285.9,
    origen: "INTERBANK",
    oferta: 1314.45,
    monto_cancelacion: 1143
  },
  {
    dni: "41410803",
    nombre: "ZAVALETA SANCHEZ RONALD ERNESTO",
    deuda: 1176.79,
    origen: "INTERBANK",
    oferta: 676.2,
    monto_cancelacion: 588
  },
  {
    dni: "41526220",
    nombre: "HUAÑAHUE GONZALES ROBERTO ELVIS",
    deuda: 1791.96,
    origen: "INTERBANK",
    oferta: 1030.4,
    monto_cancelacion: 896
  },
  {
    dni: "41734935",
    nombre: "SOTO FALCON JOSE ANGEL",
    deuda: 8190.04,
    origen: "INTERBANK",
    oferta: 4709.25,
    monto_cancelacion: 4095
  },
  {
    dni: "41915997",
    nombre: "CCOPI ANDRADE EDGAR LUIS",
    deuda: 32418.690000000002,
    origen: "INTERBANK",
    oferta: 18640.35,
    monto_cancelacion: 16209
  },
  {
    dni: "41946470",
    nombre: "SUAREZ CASTRO DANNY WILLIAMS",
    deuda: 8661.55,
    origen: "INTERBANK",
    oferta: 4980.65,
    monto_cancelacion: 4331
  },
  {
    dni: "42113296",
    nombre: "DIAZ AGUILAR SHAYLA OMAYRA",
    deuda: 1614.92,
    origen: "INTERBANK",
    oferta: 928.05,
    monto_cancelacion: 807
  },
  {
    dni: "42185939",
    nombre: "HUERTAS DIAZ RONALD",
    deuda: 32170.239999999998,
    origen: "INTERBANK",
    oferta: 18497.75,
    monto_cancelacion: 16085
  },
  {
    dni: "43039550",
    nombre: "ESPINOZA VILLAJUAN KETTY ERIKA",
    deuda: 6314.6,
    origen: "INTERBANK",
    oferta: 3630.55,
    monto_cancelacion: 3157
  },
  {
    dni: "43517289",
    nombre: "RIVERA BUENDIA CLOVER ARMANDO",
    deuda: 1945.62,
    origen: "INTERBANK",
    oferta: 1118.95,
    monto_cancelacion: 973
  },
  {
    dni: "43671142",
    nombre: "PEREDA GAMBOA MANUEL JESUS",
    deuda: 8124.95,
    origen: "INTERBANK",
    oferta: 4671.3,
    monto_cancelacion: 4062
  },
  {
    dni: "45316070",
    nombre: "ROBLES MOTA HELLEN KATTIA KAREN GEORGET",
    deuda: 3303.44,
    origen: "INTERBANK",
    oferta: 1899.8,
    monto_cancelacion: 1652
  },
  {
    dni: "45978360",
    nombre: "DELGADO SANDOVAL OMAR STEPHEN",
    deuda: 9923.57,
    origen: "INTERBANK",
    oferta: 5706.3,
    monto_cancelacion: 4962
  },
  {
    dni: "46421100",
    nombre: "TREJO ZARATE VICTOR RAUL",
    deuda: 6566.78,
    origen: "INTERBANK",
    oferta: 3775.45,
    monto_cancelacion: 3283
  },
  {
    dni: "46833926",
    nombre: "LEON MEDINA SUSAN FIORELLA",
    deuda: 1136.47,
    origen: "INTERBANK",
    oferta: 653.2,
    monto_cancelacion: 568
  },
  {
    dni: "46883696",
    nombre: "CAVERO IZAGUIRRE ELIZABETH",
    deuda: 3579.43,
    origen: "INTERBANK",
    oferta: 2058.5,
    monto_cancelacion: 1790
  },
  {
    dni: "47039711",
    nombre: "ESPINOZA OSTOS LUIS LIBORIO",
    deuda: 2196.88,
    origen: "INTERBANK",
    oferta: 1262.7,
    monto_cancelacion: 1098
  },
  {
    dni: "47164255",
    nombre: "ZEVALLOS VARGAS ANTHONY FELIX",
    deuda: 2010.35,
    origen: "INTERBANK",
    oferta: 1155.75,
    monto_cancelacion: 1005
  },
  {
    dni: "47198262",
    nombre: "TONG DAVILA DIEGO ALONSO",
    deuda: 1001.06,
    origen: "INTERBANK",
    oferta: 576.15,
    monto_cancelacion: 501
  },
  {
    dni: "47217356",
    nombre: "CABEZAS CHAHUA NIEVES VERONICA",
    deuda: 2900.82,
    origen: "INTERBANK",
    oferta: 1667.5,
    monto_cancelacion: 1450
  },
  {
    dni: "47261848",
    nombre: "LAGUNA RIVERA LUIS MIGUEL",
    deuda: 1092.91,
    origen: "INTERBANK",
    oferta: 627.9,
    monto_cancelacion: 546
  },
  {
    dni: "47528043",
    nombre: "JUAREZ FLORES JHAN CARLOS",
    deuda: 6479.29,
    origen: "INTERBANK",
    oferta: 3726.0,
    monto_cancelacion: 3240
  },
  {
    dni: "47688586",
    nombre: "LINARES RUBIO LESLY",
    deuda: 2430.34,
    origen: "INTERBANK",
    oferta: 1397.25,
    monto_cancelacion: 1215
  },
  {
    dni: "47866466",
    nombre: "CUETO MOGROBEJO MARIA FERNANDA",
    deuda: 1390.67,
    origen: "INTERBANK",
    oferta: 799.25,
    monto_cancelacion: 695
  },
  {
    dni: "47967188",
    nombre: "RODRIGUEZ SALDARRIAGA LUZ MAGALI",
    deuda: 3027.21,
    origen: "INTERBANK",
    oferta: 1741.1,
    monto_cancelacion: 1514
  },
  {
    dni: "48017207",
    nombre: "TELLO ESCALANTE SEGUNDO MANUEL",
    deuda: 1657.8,
    origen: "INTERBANK",
    oferta: 953.35,
    monto_cancelacion: 829
  },
  {
    dni: "48642149",
    nombre: "SINARAHUA CARO DAMARIS LEA",
    deuda: 1717.45,
    origen: "INTERBANK",
    oferta: 987.85,
    monto_cancelacion: 859
  },
  {
    dni: "48783888",
    nombre: "LA TORRE VENTURA KATERINE FLOR",
    deuda: 1858.05,
    origen: "INTERBANK",
    oferta: 1068.35,
    monto_cancelacion: 929
  },
  {
    dni: "61978553",
    nombre: "VELASQUEZ ARMAS PAULA",
    deuda: 1275.09,
    origen: "INTERBANK",
    oferta: 733.7,
    monto_cancelacion: 638
  },
  {
    dni: "70068258",
    nombre: "IZQUIERDO BALABARCA LUZ DE MARIA AZUCENA MEYLIN",
    deuda: 1726.72,
    origen: "INTERBANK",
    oferta: 992.45,
    monto_cancelacion: 863
  },
  {
    dni: "71850365",
    nombre: "GUTIERREZ POSADAS ANDREA RAFAELA",
    deuda: 7777.5,
    origen: "INTERBANK",
    oferta: 4472.35,
    monto_cancelacion: 3889
  },
  {
    dni: "72622160",
    nombre: "RODAS ESCOBAR JUAN CARLOS",
    deuda: 5246.18,
    origen: "INTERBANK",
    oferta: 3016.45,
    monto_cancelacion: 2623
  },
  {
    dni: "73655960",
    nombre: "SOLIS MIMBELA MELANY DIANET",
    deuda: 1425.29,
    origen: "INTERBANK",
    oferta: 819.95,
    monto_cancelacion: 713
  },
  {
    dni: "76227278",
    nombre: "ASCA ATOCHE ANGELO RONY",
    deuda: 1128.72,
    origen: "INTERBANK",
    oferta: 648.6,
    monto_cancelacion: 564
  },
  {
    dni: "76359528",
    nombre: "BUSTAMANTE GARCIA JULIO CESAR",
    deuda: 2132.92,
    origen: "INTERBANK",
    oferta: 1225.9,
    monto_cancelacion: 1066
  },
  {
    dni: "76909812",
    nombre: "SANCHEZ CARDOZO MIGUEL ANGEL",
    deuda: 1368.62,
    origen: "INTERBANK",
    oferta: 786.6,
    monto_cancelacion: 684
  },
  {
    dni: "80494346",
    nombre: "ZAPATA CHANDUVI JUAN",
    deuda: 16786.84,
    origen: "INTERBANK",
    oferta: 9651.95,
    monto_cancelacion: 8393
  },
  {
    dni: "80652678",
    nombre: "AGUILAR PRADO ROSANNA PAOLA",
    deuda: 2913.78,
    origen: "INTERBANK",
    oferta: 1675.55,
    monto_cancelacion: 1457
  },
  {
    dni: "7635344",
    nombre: "ARTURO EDWARD MENDOZA ACASIETE",
    deuda: 5855.950000000001,
    origen: "BCP",
    oferta: 3367.2,
    monto_cancelacion: 2928
  },
  {
    dni: "47336753",
    nombre: "BOTTGER TABORI JEFFS MARTIN",
    deuda: 2796.69,
    origen: "INTERBANK",
    oferta: 1607.7,
    monto_cancelacion: 1398
  },
  {
    dni: "10161019",
    nombre: "GONZALES SALINAS BARTOLOME GUILLERMO",
    deuda: 6186.51,
    origen: "INTERBANK",
    oferta: 3556.95,
    monto_cancelacion: 3093
  },
  {
    dni: "2799214",
    nombre: "ALBINES SANDOVAL JAVIER",
    deuda: 6736.68,
    origen: "INTERBANK",
    oferta: 3873.2,
    monto_cancelacion: 3368
  },
  {
    dni: "3371325",
    nombre: "CRUZ AREVALO SEGUNDO JUSTO",
    deuda: 4038.05,
    origen: "INTERBANK",
    oferta: 2321.85,
    monto_cancelacion: 2019
  },
  {
    dni: "6672515",
    nombre: "QUISPE SALAZAR FABIAN ROLANDO",
    deuda: 1692.88,
    origen: "INTERBANK",
    oferta: 972.9,
    monto_cancelacion: 846
  },
  {
    dni: "6678762",
    nombre: "NANCY CANDELARIA APOLAYA PORTILLA",
    deuda: 8393.36,
    origen: "BANCO FALABELLA",
    oferta: 4826.55,
    monto_cancelacion: 4197
  },
  {
    dni: "6758795",
    nombre: "HUAPAYA SANCHEZ JORGE LUIS",
    deuda: 3323.52,
    origen: "INTERBANK",
    oferta: 1911.3,
    monto_cancelacion: 1662
  },
  {
    dni: "6782627",
    nombre: "OROZCO CHUMACERO DIONISIA",
    deuda: 2578.52,
    origen: "INTERBANK",
    oferta: 1482.35,
    monto_cancelacion: 1289
  },
  {
    dni: "9117718",
    nombre: "LAM SEDANO MARTHA MILAGROS",
    deuda: 13312.41,
    origen: "INTERBANK",
    oferta: 7654.4,
    monto_cancelacion: 6656
  },
  {
    dni: "9574498",
    nombre: "FLORES GERMAN NORMA DELFINA",
    deuda: 29410.46,
    origen: "MIBANCO",
    oferta: 16910.75,
    monto_cancelacion: 14705
  },
  {
    dni: "10762647",
    nombre: "JIMENEZ TORRES INES ELIZABETH",
    deuda: 1511.71,
    origen: "INTERBANK",
    oferta: 869.4,
    monto_cancelacion: 756
  },
  {
    dni: "21573942",
    nombre: "PALOMINO GONZALES MIGUEL ANGEL",
    deuda: 1211.47,
    origen: "INTERBANK",
    oferta: 696.9,
    monto_cancelacion: 606
  },
  {
    dni: "22099851",
    nombre: "CONDORI BENAVIDES EDWIN ELIAS",
    deuda: 1961.68,
    origen: "INTERBANK",
    oferta: 1128.15,
    monto_cancelacion: 981
  },
  {
    dni: "27049691",
    nombre: "MEJIA SILVA MANUEL JASMELL",
    deuda: 1657.76,
    origen: "INTERBANK",
    oferta: 953.35,
    monto_cancelacion: 829
  },
  {
    dni: "33264078",
    nombre: "PALACIOS YOVERA RONALDO",
    deuda: 1999.51,
    origen: "INTERBANK",
    oferta: 1150.0,
    monto_cancelacion: 1000
  },
  {
    dni: "40312444",
    nombre: "MARTINEZ GUZMAN JENNY PAOLA",
    deuda: 2240.28,
    origen: "INTERBANK",
    oferta: 1288.0,
    monto_cancelacion: 1120
  },
  {
    dni: "41222657",
    nombre: "VELIZ PAULETT LUIS ALBERTO",
    deuda: 1169.98,
    origen: "INTERBANK",
    oferta: 672.75,
    monto_cancelacion: 585
  },
  {
    dni: "41899084",
    nombre: "ALEJOS HURTADO FIVIAN JULIAN",
    deuda: 3629.85,
    origen: "INTERBANK",
    oferta: 2087.25,
    monto_cancelacion: 1815
  },
  {
    dni: "42503498",
    nombre: "QUINTANA ROBLES LIDIA JACQUELINE",
    deuda: 1422.94,
    origen: "INTERBANK",
    oferta: 817.65,
    monto_cancelacion: 711
  },
  {
    dni: "43259981",
    nombre: "MIGUEL BALTAZAR POPUCHE SANCHEZ",
    deuda: 2508.55,
    origen: "BANCO FALABELLA",
    oferta: 1442.1,
    monto_cancelacion: 1254
  },
  {
    dni: "45303365",
    nombre: "CAMACHO CALDAS JACQUELINE VERONICA",
    deuda: 6567.46,
    origen: "INTERBANK",
    oferta: 3776.6,
    monto_cancelacion: 3284
  },
  {
    dni: "45771272",
    nombre: "CAMPOS MENDOZA HERMELINDA OCTAVIA",
    deuda: 3544.09,
    origen: "INTERBANK",
    oferta: 2037.8,
    monto_cancelacion: 1772
  },
  {
    dni: "47100257",
    nombre: "ASTO LAYZA FLOR DE MARIA",
    deuda: 3573.82,
    origen: "INTERBANK",
    oferta: 2055.05,
    monto_cancelacion: 1787
  },
  {
    dni: "48131498",
    nombre: "JARAMILLO HUARAHUARA JOEL ANTONIO",
    deuda: 1025.79,
    origen: "INTERBANK",
    oferta: 589.95,
    monto_cancelacion: 513
  },
  {
    dni: "48496115",
    nombre: "VEGA CLAROS FERNANDO VALERI",
    deuda: 2727.62,
    origen: "INTERBANK",
    oferta: 1568.6,
    monto_cancelacion: 1364
  },
  {
    dni: "72017983",
    nombre: "QUINTOS DAVILA GRACIELA",
    deuda: 2406.34,
    origen: "INTERBANK",
    oferta: 1383.45,
    monto_cancelacion: 1203
  },
  {
    dni: "72606001",
    nombre: "MELENDEZ CASTILLO ROBERTO JUNIOR",
    deuda: 1037.3,
    origen: "INTERBANK",
    oferta: 596.85,
    monto_cancelacion: 519
  },
  {
    dni: "78017393",
    nombre: "LUJAN CARRANZA JORMAN BRYAN",
    deuda: 2300.08,
    origen: "INTERBANK",
    oferta: 1322.5,
    monto_cancelacion: 1150
  },
  {
    dni: "48898226",
    nombre: "SALINAS ALCEDO REBECA FRANCIS",
    deuda: 3318.75,
    origen: "INTERBANK",
    oferta: 1907.85,
    monto_cancelacion: 1659
  },
  {
    dni: "100886",
    nombre: "FASANANDO PEZO TERCERO",
    deuda: 1184.77,
    origen: "INTERBANK",
    oferta: 680.8,
    monto_cancelacion: 592
  },
  {
    dni: "118642",
    nombre: "MATOS ZAPATA CLARISA ZENAIDA",
    deuda: 2435.97,
    origen: "INTERBANK",
    oferta: 1400.7,
    monto_cancelacion: 1218
  },
  {
    dni: "3474410",
    nombre: "CANOVA LOPEZ LIDIA MARITZA",
    deuda: 2840.82,
    origen: "INTERBANK",
    oferta: 1633.0,
    monto_cancelacion: 1420
  },
  {
    dni: "3663088",
    nombre: "JUAREZ PACHERRES ALFREDO",
    deuda: 6734.57,
    origen: "INTERBANK",
    oferta: 3872.05,
    monto_cancelacion: 3367
  },
  {
    dni: "3844742",
    nombre: "RUMICHE VDA DE GUERRERO ELVA",
    deuda: 2740.26,
    origen: "INTERBANK",
    oferta: 1575.5,
    monto_cancelacion: 1370
  },
  {
    dni: "5645065",
    nombre: "FARFAN VERGARA OLIVER CRONWELL",
    deuda: 1882.99,
    origen: "INTERBANK",
    oferta: 1082.15,
    monto_cancelacion: 941
  },
  {
    dni: "6113154",
    nombre: "HUAMANI CALDERON MARTHA JACQUELINE",
    deuda: 1353.61,
    origen: "INTERBANK",
    oferta: 778.55,
    monto_cancelacion: 677
  },
  {
    dni: "6379974",
    nombre: "FELICE HERNANDEZ LUIS ENRIQUE",
    deuda: 1755.64,
    origen: "INTERBANK",
    oferta: 1009.7,
    monto_cancelacion: 878
  },
  {
    dni: "6776070",
    nombre: "GUERRA TORRES ENUE MARIA",
    deuda: 5612.33,
    origen: "INTERBANK",
    oferta: 3226.9,
    monto_cancelacion: 2806
  },
  {
    dni: "7204915",
    nombre: "HUARACA AREVALO ELSA",
    deuda: 1416.6,
    origen: "INTERBANK",
    oferta: 814.2,
    monto_cancelacion: 708
  },
  {
    dni: "7386177",
    nombre: "SIMONETTI HERRERA ARMANDO ENRIQUE",
    deuda: 2844.55,
    origen: "INTERBANK",
    oferta: 1635.3,
    monto_cancelacion: 1422
  },
  {
    dni: "7507697",
    nombre: "TRINIDAD MEZA CONCEPCION MARIO",
    deuda: 1047.59,
    origen: "INTERBANK",
    oferta: 602.6,
    monto_cancelacion: 524
  },
  {
    dni: "7805743",
    nombre: "LAZO BEDOYA LUIS GUILLERMO",
    deuda: 2076.86,
    origen: "INTERBANK",
    oferta: 1193.7,
    monto_cancelacion: 1038
  },
  {
    dni: "8206023",
    nombre: "LEON CORONEL VDA DE MUJIC CARMEN G",
    deuda: 2385.67,
    origen: "INTERBANK",
    oferta: 1371.95,
    monto_cancelacion: 1193
  },
  {
    dni: "8416478",
    nombre: "AGUIRRE FON SAM MARIA DEL CARMEN",
    deuda: 19282.34,
    origen: "INTERBANK",
    oferta: 11087.15,
    monto_cancelacion: 9641
  },
  {
    dni: "8719123",
    nombre: "HARO PONCE DE LEON PATRICIA ISABEL",
    deuda: 1323.88,
    origen: "INTERBANK",
    oferta: 761.3,
    monto_cancelacion: 662
  },
  {
    dni: "9150503",
    nombre: "VELIZ CESPEDES ABRAHAM DOMINGO",
    deuda: 2140.67,
    origen: "INTERBANK",
    oferta: 1230.5,
    monto_cancelacion: 1070
  },
  {
    dni: "9202610",
    nombre: "NAFAC FLORES DE ALVARADO LUZ MARIA",
    deuda: 2292.15,
    origen: "INTERBANK",
    oferta: 1317.9,
    monto_cancelacion: 1146
  },
  {
    dni: "9300991",
    nombre: "FLORES AYALA VIDAL MIGUEL",
    deuda: 3010.7,
    origen: "INTERBANK",
    oferta: 1730.75,
    monto_cancelacion: 1505
  },
  {
    dni: "9313444",
    nombre: "BARDALES OLORTEGUI PAQUITA",
    deuda: 1827.14,
    origen: "INTERBANK",
    oferta: 1051.1,
    monto_cancelacion: 914
  },
  {
    dni: "9506324",
    nombre: "CAMARGO GARIBAY EDGARDO ROSENDO",
    deuda: 1762.02,
    origen: "INTERBANK",
    oferta: 1013.15,
    monto_cancelacion: 881
  },
  {
    dni: "9523598",
    nombre: "GUERRA SIMON VERONICA BERNANDINA",
    deuda: 4285.31,
    origen: "INTERBANK",
    oferta: 2464.45,
    monto_cancelacion: 2143
  },
  {
    dni: "9688899",
    nombre: "HALLASI VEGA JESUS RAFAEL",
    deuda: 7637.120000000001,
    origen: "INTERBANK",
    oferta: 4391.85,
    monto_cancelacion: 3819
  },
  {
    dni: "9763366",
    nombre: "ZUÑIGA YAURI FELICE LUIS",
    deuda: 2424.25,
    origen: "INTERBANK",
    oferta: 1393.8,
    monto_cancelacion: 1212
  },
  {
    dni: "10051164",
    nombre: "MAMANI AQUINO BRIGIDA ANGELICA",
    deuda: 1064.74,
    origen: "INTERBANK",
    oferta: 611.8,
    monto_cancelacion: 532
  },
  {
    dni: "10093214",
    nombre: "GIRALDO BULEGE JOSE DAVID",
    deuda: 1006.76,
    origen: "INTERBANK",
    oferta: 578.45,
    monto_cancelacion: 503
  },
  {
    dni: "10231771",
    nombre: "GUTIERREZ BALDOCEDA PATRICIA MERCEDES",
    deuda: 8171.95,
    origen: "INTERBANK",
    oferta: 4698.9,
    monto_cancelacion: 4086
  },
  {
    dni: "10314201",
    nombre: "TORREJON MARQUEZ RICARDO CESAR",
    deuda: 1793.71,
    origen: "INTERBANK",
    oferta: 1031.55,
    monto_cancelacion: 897
  },
  {
    dni: "10439041",
    nombre: "MENACHO VILLAR ERIKA PATRICIA",
    deuda: 2761.7,
    origen: "INTERBANK",
    oferta: 1588.15,
    monto_cancelacion: 1381
  },
  {
    dni: "15355559",
    nombre: "TANG BUSTAMANTE NELLY LILIANA",
    deuda: 2612.66,
    origen: "INTERBANK",
    oferta: 1501.9,
    monto_cancelacion: 1306
  },
  {
    dni: "15977910",
    nombre: "DULANTO LA ROSA JORGE RAMON",
    deuda: 9982.17,
    origen: "INTERBANK",
    oferta: 5739.65,
    monto_cancelacion: 4991
  },
  {
    dni: "16534151",
    nombre: "VASQUEZ ARDILES FANY NATALY",
    deuda: 9252.56,
    origen: "INTERBANK",
    oferta: 5319.9,
    monto_cancelacion: 4626
  },
  {
    dni: "18886946",
    nombre: "SANCHEZ ARTEAGA LIDIA DIONICIA",
    deuda: 5189.97,
    origen: "INTERBANK",
    oferta: 2984.25,
    monto_cancelacion: 2595
  },
  {
    dni: "19805998",
    nombre: "RAQUEL TEOFILA AGUILAR ROJAS",
    deuda: 7675.41,
    origen: "RIPLEY",
    oferta: 4413.7,
    monto_cancelacion: 3838
  },
  {
    dni: "20120509",
    nombre: "SOLANO GAMARRA DAVID MOISES",
    deuda: 18523.59,
    origen: "INTERBANK",
    oferta: 10651.3,
    monto_cancelacion: 9262
  },
  {
    dni: "20443097",
    nombre: "ROJAS QUISPE MARIA",
    deuda: 2289.11,
    origen: "INTERBANK",
    oferta: 1316.75,
    monto_cancelacion: 1145
  },
  {
    dni: "22249469",
    nombre: "FLORES LAURA JORGE LUIS",
    deuda: 2675.28,
    origen: "INTERBANK",
    oferta: 1538.7,
    monto_cancelacion: 1338
  },
  {
    dni: "22306681",
    nombre: "HERNANDEZ MARCELO CESAR AUGUSTO",
    deuda: 5812.12,
    origen: "INTERBANK",
    oferta: 3341.9,
    monto_cancelacion: 2906
  },
  {
    dni: "25582645",
    nombre: "LAZO BARRANTES PEDRO FERNANDO JESUS",
    deuda: 2841.34,
    origen: "INTERBANK",
    oferta: 1634.15,
    monto_cancelacion: 1421
  },
  {
    dni: "25620550",
    nombre: "ALVAREZ GALLEGOS MARIA ALEJANDRA",
    deuda: 3221.15,
    origen: "INTERBANK",
    oferta: 1852.65,
    monto_cancelacion: 1611
  },
  {
    dni: "25793688",
    nombre: "URTEAGA BICERRA JAIME FRANCISCO",
    deuda: 7570.99,
    origen: "INTERBANK",
    oferta: 4352.75,
    monto_cancelacion: 3785
  },
  {
    dni: "28314496",
    nombre: "VASQUEZ GUTIERREZ WALTER",
    deuda: 5685.16,
    origen: "INTERBANK",
    oferta: 3269.45,
    monto_cancelacion: 2843
  },
  {
    dni: "29295402",
    nombre: "FERNANDEZ VILLAR ARTURO WILFREDO",
    deuda: 11819.59,
    origen: "INTERBANK",
    oferta: 6796.5,
    monto_cancelacion: 5910
  },
  {
    dni: "29536541",
    nombre: "AYAMAMANI MUÑOZ SANDRA ROCIO",
    deuda: 1118.89,
    origen: "INTERBANK",
    oferta: 642.85,
    monto_cancelacion: 559
  },
  {
    dni: "29688576",
    nombre: "VILCA INFANTES TOMAS",
    deuda: 1832.5,
    origen: "INTERBANK",
    oferta: 1053.4,
    monto_cancelacion: 916
  },
  {
    dni: "29693013",
    nombre: "ORUE CHIRINOS TATIANA ROCIO",
    deuda: 2347.31,
    origen: "INTERBANK",
    oferta: 1350.1,
    monto_cancelacion: 1174
  },
  {
    dni: "40473938",
    nombre: "RUBIO MELENDEZ KATHIA",
    deuda: 3906.12,
    origen: "INTERBANK",
    oferta: 2245.95,
    monto_cancelacion: 1953
  },
  {
    dni: "40582090",
    nombre: "SANGAMA MOZOMBITE DENIS",
    deuda: 1338.78,
    origen: "INTERBANK",
    oferta: 769.35,
    monto_cancelacion: 669
  },
  {
    dni: "40757604",
    nombre: "EFFIO ARICA MILUSKA",
    deuda: 1114.64,
    origen: "INTERBANK",
    oferta: 640.55,
    monto_cancelacion: 557
  },
  {
    dni: "40923856",
    nombre: "CASTRO QUINTANA FRANCO GIOVANNI",
    deuda: 44195.23,
    origen: "INTERBANK",
    oferta: 25412.7,
    monto_cancelacion: 22098
  },
  {
    dni: "41083201",
    nombre: "PISCOYA CLAROS JUANA LOLA",
    deuda: 1181.93,
    origen: "INTERBANK",
    oferta: 679.65,
    monto_cancelacion: 591
  },
  {
    dni: "41733945",
    nombre: "HUAYLLASCO ROMERO CHRISTIAN",
    deuda: 2906.88,
    origen: "INTERBANK",
    oferta: 1670.95,
    monto_cancelacion: 1453
  },
  {
    dni: "42046401",
    nombre: "FLORES NAVARRO CESAR AUGUSTO",
    deuda: 2194.14,
    origen: "INTERBANK",
    oferta: 1261.55,
    monto_cancelacion: 1097
  },
  {
    dni: "42429618",
    nombre: "DOIG VILLA SILVANA FIORELLA",
    deuda: 1162.71,
    origen: "INTERBANK",
    oferta: 668.15,
    monto_cancelacion: 581
  },
  {
    dni: "42620286",
    nombre: "ENEQUE LOPEZ KARLA YANIRE",
    deuda: 1083.89,
    origen: "INTERBANK",
    oferta: 623.3,
    monto_cancelacion: 542
  },
  {
    dni: "42633301",
    nombre: "ARENAZA CASTRO EVA ZOE",
    deuda: 1082.92,
    origen: "INTERBANK",
    oferta: 622.15,
    monto_cancelacion: 541
  },
  {
    dni: "44167232",
    nombre: "CORRAL RAMIREZ WILFREDO FAUSTINO",
    deuda: 1669.11,
    origen: "INTERBANK",
    oferta: 960.25,
    monto_cancelacion: 835
  },
  {
    dni: "44343318",
    nombre: "ALDAVE VASQUEZ RUTH ESTHER",
    deuda: 8501.18,
    origen: "INTERBANK",
    oferta: 4888.65,
    monto_cancelacion: 4251
  },
  {
    dni: "44448617",
    nombre: "INZA RODRIGUEZ JULIA",
    deuda: 1016.82,
    origen: "INTERBANK",
    oferta: 584.2,
    monto_cancelacion: 508
  },
  {
    dni: "44493726",
    nombre: "LLANCARI GUTIERREZ MARIA DEL CARMEN",
    deuda: 1244.67,
    origen: "INTERBANK",
    oferta: 715.3,
    monto_cancelacion: 622
  },
  {
    dni: "44863011",
    nombre: "VERAMATUS HERNANDEZ MARIA ELIZABETH",
    deuda: 2383.98,
    origen: "INTERBANK",
    oferta: 1370.8,
    monto_cancelacion: 1192
  },
  {
    dni: "45082113",
    nombre: "SOTO PELAYO JUDITH ERIKA",
    deuda: 1043.39,
    origen: "INTERBANK",
    oferta: 600.3,
    monto_cancelacion: 522
  },
  {
    dni: "45231606",
    nombre: "SILVA RIMACHE ROSEMARY CATHERINE",
    deuda: 3955.02,
    origen: "RIPLEY",
    oferta: 2274.7,
    monto_cancelacion: 1978
  },
  {
    dni: "45347555",
    nombre: "RAMOS LOPEZ EVELINE GIULIANA",
    deuda: 1570.28,
    origen: "INTERBANK",
    oferta: 902.75,
    monto_cancelacion: 785
  },
  {
    dni: "45560440",
    nombre: "BENDAÑO ALFARO KENDALL JHARRINSSON",
    deuda: 2787.43,
    origen: "INTERBANK",
    oferta: 1603.1,
    monto_cancelacion: 1394
  },
  {
    dni: "46139620",
    nombre: "MAMANI ESPINOZA NOE ZENDER",
    deuda: 1253.45,
    origen: "INTERBANK",
    oferta: 721.05,
    monto_cancelacion: 627
  },
  {
    dni: "46239007",
    nombre: "AREVALO JIMENEZ KARLA ANDREA",
    deuda: 2097.98,
    origen: "INTERBANK",
    oferta: 1206.35,
    monto_cancelacion: 1049
  },
  {
    dni: "46301124",
    nombre: "HUAMAN SINTI KEVIN ELDER",
    deuda: 2147.87,
    origen: "INTERBANK",
    oferta: 1235.1,
    monto_cancelacion: 1074
  },
  {
    dni: "46307253",
    nombre: "GARCIA CAMACHO JESUS ISAIAS",
    deuda: 2173.76,
    origen: "INTERBANK",
    oferta: 1250.05,
    monto_cancelacion: 1087
  },
  {
    dni: "46469367",
    nombre: "VILCHEZ HUAMAN ANTONY RODOLFO",
    deuda: 6037.32,
    origen: "INTERBANK",
    oferta: 3471.85,
    monto_cancelacion: 3019
  },
  {
    dni: "46766104",
    nombre: "ESQUERRE ROJAS KAREN FIORELLA",
    deuda: 9669.34,
    origen: "INTERBANK",
    oferta: 5560.25,
    monto_cancelacion: 4835
  },
  {
    dni: "46921629",
    nombre: "HUANQQUE COLCA MARGOTH",
    deuda: 4616.0,
    origen: "INTERBANK",
    oferta: 2654.2,
    monto_cancelacion: 2308
  },
  {
    dni: "46927993",
    nombre: "VICENTE LOYOLA LEIBNITZ STUARDO",
    deuda: 2690.39,
    origen: "INTERBANK",
    oferta: 1546.75,
    monto_cancelacion: 1345
  },
  {
    dni: "47499723",
    nombre: "ZORRILLA PONCE SANDRA BETSABE",
    deuda: 1011.46,
    origen: "INTERBANK",
    oferta: 581.9,
    monto_cancelacion: 506
  },
  {
    dni: "47541330",
    nombre: "JUAPE NEYRA MELISSA LISETH",
    deuda: 5938.46,
    origen: "INTERBANK",
    oferta: 3414.35,
    monto_cancelacion: 2969
  },
  {
    dni: "47606359",
    nombre: "AVILA REATEGUI DANIEL ALBERTO",
    deuda: 4199.94,
    origen: "INTERBANK",
    oferta: 2415.0,
    monto_cancelacion: 2100
  },
  {
    dni: "48182318",
    nombre: "LLAJA SAGASTEGUI WESLLY VERONICA",
    deuda: 2405.01,
    origen: "INTERBANK",
    oferta: 1383.45,
    monto_cancelacion: 1203
  },
  {
    dni: "48366617",
    nombre: "GODOS ORTEGA LIZBEIDI DE JESUS",
    deuda: 7675.85,
    origen: "INTERBANK",
    oferta: 4413.7,
    monto_cancelacion: 3838
  },
  {
    dni: "48370152",
    nombre: "GUSIEFF CALIFORNIA VISTOR MARTIN",
    deuda: 1594.09,
    origen: "INTERBANK",
    oferta: 916.55,
    monto_cancelacion: 797
  },
  {
    dni: "70052175",
    nombre: "ZAPATA RISCO ERICK ALDAIR",
    deuda: 3949.74,
    origen: "INTERBANK",
    oferta: 2271.25,
    monto_cancelacion: 1975
  },
  {
    dni: "70124830",
    nombre: "ZERPA PALOMINO OSCAR CARLOS",
    deuda: 4609.53,
    origen: "INTERBANK",
    oferta: 2650.75,
    monto_cancelacion: 2305
  },
  {
    dni: "70576561",
    nombre: "GALVEZ HUAYTA GERALDINE CARMEN",
    deuda: 2289.21,
    origen: "INTERBANK",
    oferta: 1316.75,
    monto_cancelacion: 1145
  },
  {
    dni: "71736730",
    nombre: "FARFAN VALDIVIA BRENDA SABICELI",
    deuda: 1007.04,
    origen: "INTERBANK",
    oferta: 579.6,
    monto_cancelacion: 504
  },
  {
    dni: "71803113",
    nombre: "CARBAJAL ARANCIBIA AYME",
    deuda: 1928.49,
    origen: "INTERBANK",
    oferta: 1108.6,
    monto_cancelacion: 964
  },
  {
    dni: "72649119",
    nombre: "LIZARRAGA MARIN SEBASTIAN ANTONIO",
    deuda: 6689.39,
    origen: "INTERBANK",
    oferta: 3846.75,
    monto_cancelacion: 3345
  },
  {
    dni: "72702385",
    nombre: "RIVAS QUIJANO BRENDA NICOLE",
    deuda: 1009.26,
    origen: "INTERBANK",
    oferta: 580.75,
    monto_cancelacion: 505
  },
  {
    dni: "72865769",
    nombre: "VARGAS MIÑANO BRAYAN FERNANDO JUNIOR",
    deuda: 4681.96,
    origen: "INTERBANK",
    oferta: 2692.15,
    monto_cancelacion: 2341
  },
  {
    dni: "23258637",
    nombre: "TAPARA CASQUI ILBERTO",
    deuda: 4777.54,
    origen: "INTERBANK",
    oferta: 2197.65,
    monto_cancelacion: 1911
  },
  {
    dni: "40977297",
    nombre: "ZUÑIGA LOPEZ MANUEL VICTOR",
    deuda: 8548.34,
    origen: "INTERBANK",
    oferta: 3931.85,
    monto_cancelacion: 3419
  },
  {
    dni: "43106797",
    nombre: "IPARRAGUIRRE CAYGUARAY CINDY SHIRLEY",
    deuda: 10357.74,
    origen: "INTERBANK",
    oferta: 4764.45,
    monto_cancelacion: 4143
  },
  {
    dni: "43522279",
    nombre: "CANDIOTTI VARELA JESSICA",
    deuda: 10929.81,
    origen: "INTERBANK",
    oferta: 5027.8,
    monto_cancelacion: 4372
  },
  {
    dni: "46734321",
    nombre: "MASIAS CUADROS GIANCARLOS",
    deuda: 6488.15,
    origen: "INTERBANK",
    oferta: 2984.25,
    monto_cancelacion: 2595
  },
  {
    dni: "18120707",
    nombre: "ORTECHO CASTILLO ROBIN ALAMIR",
    deuda: 6653.72,
    origen: "INTERBANK",
    oferta: 3060.15,
    monto_cancelacion: 2661
  },
  {
    dni: "45602721",
    nombre: "URIARTE MESTANZA MERCY YESSENIA",
    deuda: 7080.76,
    origen: "INTERBANK",
    oferta: 3256.8,
    monto_cancelacion: 2832
  },
  {
    dni: "1212068",
    nombre: "MAMANI FLORES FRANCISCO GERONIMO",
    deuda: 6548.68,
    origen: "INTERBANK",
    oferta: 3011.85,
    monto_cancelacion: 2619
  },
  {
    dni: "2863646",
    nombre: "GIRON BENITES ANA MARIA",
    deuda: 5105.92,
    origen: "INTERBANK",
    oferta: 2348.3,
    monto_cancelacion: 2042
  },
  {
    dni: "7684281",
    nombre: "RIVERA LOPEZ LUIS ADALBERTO",
    deuda: 9218.05,
    origen: "INTERBANK",
    oferta: 4240.05,
    monto_cancelacion: 3687
  },
  {
    dni: "8175206",
    nombre: "CHAVEZ PUERTA WELLINGTON OSCAR",
    deuda: 6835.21,
    origen: "INTERBANK",
    oferta: 3144.1,
    monto_cancelacion: 2734
  },
  {
    dni: "8737916",
    nombre: "GELDRES ROJAS OSCAR AFRODISIO",
    deuda: 3619.06,
    origen: "INTERBANK",
    oferta: 1665.2,
    monto_cancelacion: 1448
  },
  {
    dni: "9574507",
    nombre: "SOTO CAMPOS EDY MIQUE",
    deuda: 6264.6,
    origen: "INTERBANK",
    oferta: 2881.9,
    monto_cancelacion: 2506
  },
  {
    dni: "9642783",
    nombre: "MOSCOSO CORDOVA RICARDINA",
    deuda: 7928.83,
    origen: "INTERBANK",
    oferta: 3647.8,
    monto_cancelacion: 3172
  },
  {
    dni: "9986281",
    nombre: "TASAYCO CUNYARACHE MADANY MARILU",
    deuda: 7027.65,
    origen: "INTERBANK",
    oferta: 3232.65,
    monto_cancelacion: 2811
  },
  {
    dni: "10310063",
    nombre: "MARTINEZ CHINCHON LUIS ALBERTO",
    deuda: 4057.69,
    origen: "INTERBANK",
    oferta: 1866.45,
    monto_cancelacion: 1623
  },
  {
    dni: "10483813",
    nombre: "MARCATINCO SAIRE SOFIA SONIA",
    deuda: 3616.57,
    origen: "INTERBANK",
    oferta: 1664.05,
    monto_cancelacion: 1447
  },
  {
    dni: "10734662",
    nombre: "CASIANO RODRIGUEZ SUSANA",
    deuda: 29379.57,
    origen: "INTERBANK",
    oferta: 13514.8,
    monto_cancelacion: 11752
  },
  {
    dni: "16417396",
    nombre: "ARANA LIZA EDUARDO",
    deuda: 4213.08,
    origen: "INTERBANK",
    oferta: 1937.75,
    monto_cancelacion: 1685
  },
  {
    dni: "17918436",
    nombre: "COLLANTES ANGULO LUIS FERNANDO",
    deuda: 9308.94,
    origen: "INTERBANK",
    oferta: 4282.6,
    monto_cancelacion: 3724
  },
  {
    dni: "21522289",
    nombre: "HUAYANCA PEREZ JOSE ANTONIO",
    deuda: 27469.04,
    origen: "INTERBANK",
    oferta: 12636.2,
    monto_cancelacion: 10988
  },
  {
    dni: "23872849",
    nombre: "CALSINO CURIE ALEIDA",
    deuda: 3907.86,
    origen: "INTERBANK",
    oferta: 1797.45,
    monto_cancelacion: 1563
  },
  {
    dni: "29317152",
    nombre: "RAMIREZ BUDIEL MIGUEL ALBERTO",
    deuda: 19413.45,
    origen: "INTERBANK",
    oferta: 8929.75,
    monto_cancelacion: 7765
  },
  {
    dni: "29566661",
    nombre: "TORRES PORTUGAL DE LLOSA MARIBEL JANETH",
    deuda: 23302.61,
    origen: "INTERBANK",
    oferta: 10719.15,
    monto_cancelacion: 9321
  },
  {
    dni: "40177395",
    nombre: "MARTINEZ CASTILLA PAUL EMERSON",
    deuda: 20655.71,
    origen: "INTERBANK",
    oferta: 9501.3,
    monto_cancelacion: 8262
  },
  {
    dni: "40256232",
    nombre: "TORI SANCHEZ JOSE FRANCISCO",
    deuda: 9566.35,
    origen: "INTERBANK",
    oferta: 4401.05,
    monto_cancelacion: 3827
  },
  {
    dni: "40997829",
    nombre: "MERCEDES DORIS LIZARRAGA PATIÑO",
    deuda: 8283.39,
    origen: "INTERBANK",
    oferta: 3809.95,
    monto_cancelacion: 3313
  },
  {
    dni: "41871815",
    nombre: "LAURA PATILONGO JENNY LUZ",
    deuda: 3055.96,
    origen: "INTERBANK",
    oferta: 1405.3,
    monto_cancelacion: 1222
  },
  {
    dni: "42056909",
    nombre: "TORRES GUERRA ANTHONY JEREMY",
    deuda: 9636.2,
    origen: "INTERBANK",
    oferta: 4432.1,
    monto_cancelacion: 3854
  },
  {
    dni: "43039112",
    nombre: "MOGOLLON ANCAJIMA ROSA MARIA",
    deuda: 8215.68,
    origen: "INTERBANK",
    oferta: 3778.9,
    monto_cancelacion: 3286
  },
  {
    dni: "43486414",
    nombre: "NAKAMURA JAIMES TRACEE IRENE",
    deuda: 4037.67,
    origen: "INTERBANK",
    oferta: 1857.25,
    monto_cancelacion: 1615
  },
  {
    dni: "43716009",
    nombre: "REQUENA VILCHEZ KARLA ETELVINA",
    deuda: 4097.56,
    origen: "INTERBANK",
    oferta: 1884.85,
    monto_cancelacion: 1639
  },
  {
    dni: "43728058",
    nombre: "CHAFLOQUE PEDRAZA JUAN CARLOS",
    deuda: 3754.83,
    origen: "INTERBANK",
    oferta: 1727.3,
    monto_cancelacion: 1502
  },
  {
    dni: "44551031",
    nombre: "TUEROS SANTOS GUISSELA",
    deuda: 5994.9,
    origen: "INTERBANK",
    oferta: 2757.7,
    monto_cancelacion: 2398
  },
  {
    dni: "44633515",
    nombre: "FLORES VILLAFAN JESUS RAUL",
    deuda: 14940.05,
    origen: "INTERBANK",
    oferta: 6872.4,
    monto_cancelacion: 5976
  },
  {
    dni: "44953333",
    nombre: "CRUZ URIOL LILY LISBETH",
    deuda: 9596.21,
    origen: "INTERBANK",
    oferta: 4413.7,
    monto_cancelacion: 3838
  },
  {
    dni: "45025554",
    nombre: "FEBRES MURAKAMI AKEMI",
    deuda: 5993.43,
    origen: "INTERBANK",
    oferta: 2756.55,
    monto_cancelacion: 2397
  },
  {
    dni: "48799426",
    nombre: "LARICO ZAPANA LESLIE FABIOLA",
    deuda: 26334.69,
    origen: "INTERBANK",
    oferta: 12114.1,
    monto_cancelacion: 10534
  },
  {
    dni: "70923230",
    nombre: "QUINTO PEREZ RAQUEL DELIA",
    deuda: 5643.46,
    origen: "INTERBANK",
    oferta: 2595.55,
    monto_cancelacion: 2257
  },
  {
    dni: "71860654",
    nombre: "ESPIRITU QUISPE EDUARDO ALESSANDRO",
    deuda: 4798.85,
    origen: "INTERBANK",
    oferta: 2208.0,
    monto_cancelacion: 1920
  },
  {
    dni: "80519993",
    nombre: "ROJAS LA TORRE DIEGO ALEJANDRO",
    deuda: 5122.88,
    origen: "INTERBANK",
    oferta: 2356.35,
    monto_cancelacion: 2049
  },
  {
    dni: "9726732",
    nombre: "SILVA MEZA JORGE EDUARDO",
    deuda: 8727.49,
    origen: "INTERBANK",
    oferta: 4014.65,
    monto_cancelacion: 3491
  },
  {
    dni: "6170333",
    nombre: "CABALLERO VALENCIA FANNY TERESA",
    deuda: 6758.15,
    origen: "INTERBANK",
    oferta: 3108.45,
    monto_cancelacion: 2703
  },
  {
    dni: "6849441",
    nombre: "MOREYRA MEJIA MAGDA CARMEN",
    deuda: 9933.57,
    origen: "INTERBANK",
    oferta: 4568.95,
    monto_cancelacion: 3973
  },
  {
    dni: "10690550",
    nombre: "SANTIAGO BENDEZU RENAN EVARISTO",
    deuda: 5362.51,
    origen: "INTERBANK",
    oferta: 2466.75,
    monto_cancelacion: 2145
  },
  {
    dni: "29222907",
    nombre: "CENTURION RIVAS ILIA ROCIO",
    deuda: 8736.9,
    origen: "INTERBANK",
    oferta: 4019.25,
    monto_cancelacion: 3495
  },
  {
    dni: "40468062",
    nombre: "JANAMPA LIMA CESAR",
    deuda: 9544.06,
    origen: "INTERBANK",
    oferta: 4390.7,
    monto_cancelacion: 3818
  },
  {
    dni: "42133756",
    nombre: "CAHUANA ANDIA HERNAN FRANK",
    deuda: 14816.3,
    origen: "INTERBANK",
    oferta: 6816.05,
    monto_cancelacion: 5927
  },
  {
    dni: "42718438",
    nombre: "CORDOVA MACHICADO FABIOLA",
    deuda: 4003.07,
    origen: "INTERBANK",
    oferta: 1841.15,
    monto_cancelacion: 1601
  },
  {
    dni: "43257269",
    nombre: "NOLASCO CABANILLAS JUAN REYNALDO",
    deuda: 15020.76,
    origen: "INTERBANK",
    oferta: 6909.2,
    monto_cancelacion: 6008
  },
  {
    dni: "43285406",
    nombre: "LEON ZAVALETA CARMEN YAMELL",
    deuda: 9790.77,
    origen: "INTERBANK",
    oferta: 4503.4,
    monto_cancelacion: 3916
  },
  {
    dni: "43669788",
    nombre: "JEISON DISNEY FERNANDEZ DELGADO",
    deuda: 49940.64,
    origen: "BCP",
    oferta: 22972.4,
    monto_cancelacion: 19976
  },
  {
    dni: "44007119",
    nombre: "SANCHEZ PEREZ LUIS ALBERTO",
    deuda: 9347.71,
    origen: "INTERBANK",
    oferta: 4299.85,
    monto_cancelacion: 3739
  },
  {
    dni: "44119050",
    nombre: "DOMINGUEZ MONTESINOS EVELINE PATRICIA",
    deuda: 6430.07,
    origen: "INTERBANK",
    oferta: 2957.8,
    monto_cancelacion: 2572
  },
  {
    dni: "44236534",
    nombre: "PASACHE RIVAS ALEXANDER",
    deuda: 5710.25,
    origen: "INTERBANK",
    oferta: 2626.6,
    monto_cancelacion: 2284
  },
  {
    dni: "44551894",
    nombre: "REYES ARANDA JHONATAN HENRY",
    deuda: 4442.78,
    origen: "INTERBANK",
    oferta: 2043.55,
    monto_cancelacion: 1777
  },
  {
    dni: "44626625",
    nombre: "COLLAZOS OLAYA OSCAR DANIEL",
    deuda: 21593.98,
    origen: "INTERBANK",
    oferta: 9933.7,
    monto_cancelacion: 8638
  },
  {
    dni: "45070701",
    nombre: "LOZANO OCUPA ROBERT WILIAN",
    deuda: 3082.08,
    origen: "INTERBANK",
    oferta: 1417.95,
    monto_cancelacion: 1233
  },
  {
    dni: "45965765",
    nombre: "RODRIGUEZ CASTILLO ASHLEY KIMBERLEY",
    deuda: 8925.14,
    origen: "INTERBANK",
    oferta: 4105.5,
    monto_cancelacion: 3570
  },
  {
    dni: "3886974",
    nombre: "ZAPATA NOLASCO ROXANA ELIZABETH",
    deuda: 3563.65,
    origen: "INTERBANK",
    oferta: 1638.75,
    monto_cancelacion: 1425
  },
  {
    dni: "15665935",
    nombre: "CASTILLO DE LEON CARMEN SOLEDAD",
    deuda: 4939.25,
    origen: "INTERBANK",
    oferta: 2272.4,
    monto_cancelacion: 1976
  },
  {
    dni: "29626640",
    nombre: "MURILLO AYAMAMANI FRANCISCO",
    deuda: 8358.27,
    origen: "INTERBANK",
    oferta: 3844.45,
    monto_cancelacion: 3343
  },
  {
    dni: "40926829",
    nombre: "CAMPOS CHAPARRO YOUNG EBERTH",
    deuda: 4246.16,
    origen: "INTERBANK",
    oferta: 1952.7,
    monto_cancelacion: 1698
  },
  {
    dni: "46123005",
    nombre: "QUISPE ESPINOZA DANTOM ESLIN",
    deuda: 3452.5,
    origen: "INTERBANK",
    oferta: 1588.15,
    monto_cancelacion: 1381
  },
  {
    dni: "47540006",
    nombre: "MIRANDA TOMAS FREDDY MARTIRES",
    deuda: 13524.87,
    origen: "INTERBANK",
    oferta: 6221.5,
    monto_cancelacion: 5410
  },
  {
    dni: "76946647",
    nombre: "CORDOVA GUTIERREZ YENNIFFER GABRIELA",
    deuda: 3071.44,
    origen: "INTERBANK",
    oferta: 1413.35,
    monto_cancelacion: 1229
  },
  {
    dni: "7462245",
    nombre: "JOSE ARTURO TINEO ANDIA",
    deuda: 12705.596669999999,
    origen: "INTERBANK",
    oferta: 5844.3,
    monto_cancelacion: 5082
  },
  {
    dni: "44315493",
    nombre: "AGUIRRE AMASIFEN ROLIN",
    deuda: 6812.11,
    origen: "INTERBANK",
    oferta: 3133.75,
    monto_cancelacion: 2725
  },
  {
    dni: "73595209",
    nombre: "ROMERO SECLEN WALTER AURELIO",
    deuda: 3569.92,
    origen: "INTERBANK",
    oferta: 1642.2,
    monto_cancelacion: 1428
  },
  {
    dni: "2610236",
    nombre: "FARFAN BALAREZO FRANCISCO ANTIOCO",
    deuda: 3585.01,
    origen: "INTERBANK",
    oferta: 1649.1,
    monto_cancelacion: 1434
  },
  {
    dni: "9351274",
    nombre: "BUSTILLOS YNGA BEATRIZ NORMA",
    deuda: 9787.54,
    origen: "INTERBANK",
    oferta: 4502.25,
    monto_cancelacion: 3915
  },
  {
    dni: "9660285",
    nombre: "SALOME OROÑA BERTHA",
    deuda: 4570.17,
    origen: "INTERBANK",
    oferta: 2102.2,
    monto_cancelacion: 1828
  },
  {
    dni: "18886145",
    nombre: "MORENO POLO CARLOS ESTEBAN",
    deuda: 6381.14,
    origen: "INTERBANK",
    oferta: 2934.8,
    monto_cancelacion: 2552
  },
  {
    dni: "44798524",
    nombre: "VEGA ÑIQUEN JOSE LUIS",
    deuda: 3191.42,
    origen: "INTERBANK",
    oferta: 1468.55,
    monto_cancelacion: 1277
  },
  {
    dni: "3604457",
    nombre: "ZAPATA CORONADO LUMBER HUMBERTO",
    deuda: 6982.19,
    origen: "INTERBANK",
    oferta: 3211.95,
    monto_cancelacion: 2793
  },
  {
    dni: "3646458",
    nombre: "MENDOZA CHAVEZ JOSE OSWALDO",
    deuda: 5352.19,
    origen: "INTERBANK",
    oferta: 2462.15,
    monto_cancelacion: 2141
  },
  {
    dni: "6222868",
    nombre: "ARROYO GALLARDO ABRAHAM SEBASTIAN",
    deuda: 5332.61,
    origen: "INTERBANK",
    oferta: 2452.95,
    monto_cancelacion: 2133
  },
  {
    dni: "6662192",
    nombre: "PRIETO VARGAS JOSE BENITO",
    deuda: 8428.06,
    origen: "INTERBANK",
    oferta: 3876.65,
    monto_cancelacion: 3371
  },
  {
    dni: "7309134",
    nombre: "DIEZ ROMERO JAVIER ALBERTO",
    deuda: 10256.7,
    origen: "INTERBANK",
    oferta: 4718.45,
    monto_cancelacion: 4103
  },
  {
    dni: "7475823",
    nombre: "ALCANTARA ORTIZ CESAR EDUARDO",
    deuda: 10409.9,
    origen: "INTERBANK",
    oferta: 4788.6,
    monto_cancelacion: 4164
  },
  {
    dni: "7832261",
    nombre: "LIDIA VERONICA GARCIA LANDEO",
    deuda: 12258.74,
    origen: "INTERBANK",
    oferta: 5638.45,
    monto_cancelacion: 4903
  },
  {
    dni: "8609983",
    nombre: "VIZCARDO BERROCAL JOSE CARLOS",
    deuda: 7265.05,
    origen: "INTERBANK",
    oferta: 3341.9,
    monto_cancelacion: 2906
  },
  {
    dni: "8694352",
    nombre: "VALERA SANCHEZ OFELIA JASMINA",
    deuda: 9606.23,
    origen: "INTERBANK",
    oferta: 4418.3,
    monto_cancelacion: 3842
  },
  {
    dni: "8717357",
    nombre: "HURTADO LEON CARMEN ROSA",
    deuda: 12161.15,
    origen: "INTERBANK",
    oferta: 5593.6,
    monto_cancelacion: 4864
  },
  {
    dni: "9086153",
    nombre: "PINEDO VARGAS MARIA NATIVIDAD",
    deuda: 9410.72,
    origen: "INTERBANK",
    oferta: 4328.6,
    monto_cancelacion: 3764
  },
  {
    dni: "9310419",
    nombre: "CHAVEZ OCHOA EDWARD MARCELO",
    deuda: 6605.25,
    origen: "INTERBANK",
    oferta: 3038.3,
    monto_cancelacion: 2642
  },
  {
    dni: "9419506",
    nombre: "MIRANDA LOPEZ NARCISA QUINTINA",
    deuda: 5304.28,
    origen: "INTERBANK",
    oferta: 2440.3,
    monto_cancelacion: 2122
  },
  {
    dni: "9750259",
    nombre: "ALVARADO CAHUAS DE ZAMORA DINA",
    deuda: 5873.22,
    origen: "INTERBANK",
    oferta: 2701.35,
    monto_cancelacion: 2349
  },
  {
    dni: "9901441",
    nombre: "SEBASTIAN HILARIO FLOR DIANA",
    deuda: 5773.83,
    origen: "INTERBANK",
    oferta: 2656.5,
    monto_cancelacion: 2310
  },
  {
    dni: "10366022",
    nombre: "MAMANI SANCA MARTIN",
    deuda: 5181.76,
    origen: "INTERBANK",
    oferta: 2383.95,
    monto_cancelacion: 2073
  },
  {
    dni: "10659061",
    nombre: "GAVIÑO JUNCHAYA CLAUDIA PAOLA",
    deuda: 8301.33,
    origen: "INTERBANK",
    oferta: 3819.15,
    monto_cancelacion: 3321
  },
  {
    dni: "15963093",
    nombre: "CRUZ GASPAR LUIS ALFREDO",
    deuda: 3170.71,
    origen: "INTERBANK",
    oferta: 1458.2,
    monto_cancelacion: 1268
  },
  {
    dni: "16434279",
    nombre: "ODIAGA LLEMPEN JESUS ELENA",
    deuda: 6001.91,
    origen: "INTERBANK",
    oferta: 2761.15,
    monto_cancelacion: 2401
  },
  {
    dni: "16676776",
    nombre: "BERRIOS OLANO LEONID",
    deuda: 11293.56,
    origen: "INTERBANK",
    oferta: 5194.55,
    monto_cancelacion: 4517
  },
  {
    dni: "18028788",
    nombre: "VACA VERA ANGELA",
    deuda: 5244.22,
    origen: "INTERBANK",
    oferta: 2412.7,
    monto_cancelacion: 2098
  },
  {
    dni: "18090897",
    nombre: "VILLALOBOS PRETELL MAGALI DEL ROCIO",
    deuda: 3038.57,
    origen: "INTERBANK",
    oferta: 1397.25,
    monto_cancelacion: 1215
  },
  {
    dni: "18152264",
    nombre: "LEZAMA RODRIGUEZ MIGUEL ANGEL",
    deuda: 8837.56,
    origen: "INTERBANK",
    oferta: 4065.25,
    monto_cancelacion: 3535
  },
  {
    dni: "18173064",
    nombre: "DEZA DE AURAZO NANCY ROXANA",
    deuda: 4140.63,
    origen: "INTERBANK",
    oferta: 1904.4,
    monto_cancelacion: 1656
  },
  {
    dni: "21105076",
    nombre: "AMAYA RIVAS ANGELICA",
    deuda: 9667.79,
    origen: "INTERBANK",
    oferta: 4447.05,
    monto_cancelacion: 3867
  },
  {
    dni: "21447226",
    nombre: "CABRERA BENDEZU CECILIA BEATRIZ",
    deuda: 15893.41,
    origen: "INTERBANK",
    oferta: 7310.55,
    monto_cancelacion: 6357
  },
  {
    dni: "22288669",
    nombre: "MORA AGUIRRE ALBERTO RAMIRO",
    deuda: 8489.06,
    origen: "INTERBANK",
    oferta: 3905.4,
    monto_cancelacion: 3396
  },
  {
    dni: "25575988",
    nombre: "HUAMAN SICHA MIGUEL MAURO",
    deuda: 4997.28,
    origen: "INTERBANK",
    oferta: 2298.85,
    monto_cancelacion: 1999
  },
  {
    dni: "25692221",
    nombre: "VARGAS RIVADENEYRA ROSA SANTOS",
    deuda: 9928.69,
    origen: "INTERBANK",
    oferta: 4566.65,
    monto_cancelacion: 3971
  },
  {
    dni: "25847840",
    nombre: "GUARNIZ BERMUDEZ ZOILA PAOLA",
    deuda: 18149.59,
    origen: "INTERBANK",
    oferta: 8349.0,
    monto_cancelacion: 7260
  },
  {
    dni: "27575488",
    nombre: "MEJIA ESCOBAR ALADINO",
    deuda: 4914.18,
    origen: "INTERBANK",
    oferta: 2260.9,
    monto_cancelacion: 1966
  },
  {
    dni: "28298364",
    nombre: "VILCHEZ MAR KING HENRY",
    deuda: 24961.550000000003,
    origen: "INTERBANK",
    oferta: 11482.75,
    monto_cancelacion: 9985
  },
  {
    dni: "29475338",
    nombre: "ABRIL NUÑEZ LORENZA",
    deuda: 8315.68,
    origen: "INTERBANK",
    oferta: 3824.9,
    monto_cancelacion: 3326
  },
  {
    dni: "29518705",
    nombre: "FLORES FERNANDEZ BLANCA SOLEDAD",
    deuda: 6505.67,
    origen: "INTERBANK",
    oferta: 2992.3,
    monto_cancelacion: 2602
  },
  {
    dni: "29665323",
    nombre: "ACOSTA VILDOZO GIANCARLO ALEX",
    deuda: 11784.9,
    origen: "INTERBANK",
    oferta: 5421.1,
    monto_cancelacion: 4714
  },
  {
    dni: "32939730",
    nombre: "PINTO VASQUEZ ERICKA LILIANA",
    deuda: 18444.17,
    origen: "INTERBANK",
    oferta: 8484.7,
    monto_cancelacion: 7378
  },
  {
    dni: "40049879",
    nombre: "RODRIGUEZ PAREDES GREGORIA",
    deuda: 7195.139999999999,
    origen: "INTERBANK",
    oferta: 3309.7,
    monto_cancelacion: 2878
  },
  {
    dni: "40293862",
    nombre: "QUISPE MAMANI CECILIA",
    deuda: 8329.5,
    origen: "INTERBANK",
    oferta: 3831.8,
    monto_cancelacion: 3332
  },
  {
    dni: "40427212",
    nombre: "GAVIDIA ERMITAÑO JHONSON",
    deuda: 15843.17,
    origen: "INTERBANK",
    oferta: 7287.55,
    monto_cancelacion: 6337
  },
  {
    dni: "40434172",
    nombre: "RICHE VIGO FLORIDELIA",
    deuda: 3037.81,
    origen: "INTERBANK",
    oferta: 1397.25,
    monto_cancelacion: 1215
  },
  {
    dni: "40510045",
    nombre: "MIRAVAL RIVERA KATTY JANETT",
    deuda: 8009.68,
    origen: "INTERBANK",
    oferta: 3684.6,
    monto_cancelacion: 3204
  },
  {
    dni: "40590368",
    nombre: "ARELLANO CARRION JHONY DANIEL",
    deuda: 19803.16,
    origen: "INTERBANK",
    oferta: 9109.15,
    monto_cancelacion: 7921
  },
  {
    dni: "40793475",
    nombre: "MALAVER ORTIZ BLANCA DORALI",
    deuda: 29533.45,
    origen: "INTERBANK",
    oferta: 13584.95,
    monto_cancelacion: 11813
  },
  {
    dni: "41187390",
    nombre: "GONZALEZ ROSAS ENRIQUE ARTURO",
    deuda: 24431.48,
    origen: "INTERBANK",
    oferta: 11238.95,
    monto_cancelacion: 9773
  },
  {
    dni: "41252581",
    nombre: "CARDENAS VILDOSO JIM",
    deuda: 26982.03,
    origen: "INTERBANK",
    oferta: 12411.95,
    monto_cancelacion: 10793
  },
  {
    dni: "41296005",
    nombre: "VILLANUEVA ESCALANTE LUZ ANGELICA",
    deuda: 21692.11,
    origen: "INTERBANK",
    oferta: 9978.55,
    monto_cancelacion: 8677
  },
  {
    dni: "41573538",
    nombre: "QUIPAS AGUILAR BENITO JOEL",
    deuda: 8328.07,
    origen: "INTERBANK",
    oferta: 3830.65,
    monto_cancelacion: 3331
  },
  {
    dni: "41824462",
    nombre: "ZAVALETA CAMPOS DEYSI ROSS MERY",
    deuda: 11274.38,
    origen: "INTERBANK",
    oferta: 5186.5,
    monto_cancelacion: 4510
  },
  {
    dni: "42069705",
    nombre: "QUISPE CASTILLO AURELIO",
    deuda: 14711.25,
    origen: "INTERBANK",
    oferta: 6767.75,
    monto_cancelacion: 5885
  },
  {
    dni: "42097942",
    nombre: "PIZARRO JAUREGUI SINTIA KARLA",
    deuda: 25645.14,
    origen: "INTERBANK",
    oferta: 11796.7,
    monto_cancelacion: 10258
  },
  {
    dni: "42194926",
    nombre: "ZAVALA CANAHUALPA DEYSI ANGELICA",
    deuda: 8028.48,
    origen: "INTERBANK",
    oferta: 3692.65,
    monto_cancelacion: 3211
  },
  {
    dni: "42261917",
    nombre: "NEYRA ZAPATA HILDA MARIA",
    deuda: 8775.9,
    origen: "INTERBANK",
    oferta: 4036.5,
    monto_cancelacion: 3510
  },
  {
    dni: "42313500",
    nombre: "BASILIO BURGOS JUAN APARICIO",
    deuda: 3141.19,
    origen: "INTERBANK",
    oferta: 1444.4,
    monto_cancelacion: 1256
  },
  {
    dni: "42394146",
    nombre: "CUETO YIKA FELIX SANTIAGO",
    deuda: 7686.72,
    origen: "INTERBANK",
    oferta: 3536.25,
    monto_cancelacion: 3075
  },
  {
    dni: "42714129",
    nombre: "LAOS NARVAEZ VERALUCIA",
    deuda: 17497.11,
    origen: "INTERBANK",
    oferta: 8048.85,
    monto_cancelacion: 6999
  },
  {
    dni: "42811485",
    nombre: "MUÑOZ LACA RICARDO HUGO",
    deuda: 10701.09,
    origen: "INTERBANK",
    oferta: 4922.0,
    monto_cancelacion: 4280
  },
  {
    dni: "43838355",
    nombre: "SUAREZ ÑUFLO HAROLD KHEIT",
    deuda: 5680.92,
    origen: "INTERBANK",
    oferta: 2612.8,
    monto_cancelacion: 2272
  },
  {
    dni: "44054010",
    nombre: "MEZA RIVERA ILA GABRIELA",
    deuda: 3156.57,
    origen: "INTERBANK",
    oferta: 1452.45,
    monto_cancelacion: 1263
  },
  {
    dni: "44654507",
    nombre: "MARIN TERRONES OSCAR FREDDY",
    deuda: 5810.3,
    origen: "INTERBANK",
    oferta: 2672.6,
    monto_cancelacion: 2324
  },
  {
    dni: "44981699",
    nombre: "HUAMAN LOPEZ AIDA ELIZABETH",
    deuda: 20049.69,
    origen: "INTERBANK",
    oferta: 9223.0,
    monto_cancelacion: 8020
  },
  {
    dni: "45117710",
    nombre: "FLORES CHAMAYA SARA BARBARITA",
    deuda: 5398.29,
    origen: "INTERBANK",
    oferta: 2482.85,
    monto_cancelacion: 2159
  },
  {
    dni: "45143310",
    nombre: "MOZOMBITE TUANAMA MARGOLITH",
    deuda: 9556.68,
    origen: "INTERBANK",
    oferta: 4396.45,
    monto_cancelacion: 3823
  },
  {
    dni: "45150636",
    nombre: "SALVADOR MONDRAGON LUIS BELTRAN",
    deuda: 7407.06,
    origen: "INTERBANK",
    oferta: 3407.45,
    monto_cancelacion: 2963
  },
  {
    dni: "45851511",
    nombre: "PEREZ SALAZAR NIXON HOSMAN",
    deuda: 5427.87,
    origen: "INTERBANK",
    oferta: 2496.65,
    monto_cancelacion: 2171
  },
  {
    dni: "45860725",
    nombre: "TORRES PORRAS JERZON JONATAN",
    deuda: 17964.78,
    origen: "INTERBANK",
    oferta: 8263.9,
    monto_cancelacion: 7186
  },
  {
    dni: "46080547",
    nombre: "ANGELES CABALLERO MAYRA ALEXANDRA",
    deuda: 4515.86,
    origen: "INTERBANK",
    oferta: 2076.9,
    monto_cancelacion: 1806
  },
  {
    dni: "46120556",
    nombre: "GONZALES VEGA ANTHONY JOHN",
    deuda: 4623.31,
    origen: "INTERBANK",
    oferta: 2126.35,
    monto_cancelacion: 1849
  },
  {
    dni: "46896226",
    nombre: "PEREZ CAVERO ANDREA VALERIA",
    deuda: 5790.35,
    origen: "INTERBANK",
    oferta: 2663.4,
    monto_cancelacion: 2316
  },
  {
    dni: "46948621",
    nombre: "RIVAS VILLALTA CLARA INES",
    deuda: 7962.09,
    origen: "INTERBANK",
    oferta: 3662.75,
    monto_cancelacion: 3185
  },
  {
    dni: "46961041",
    nombre: "HUAROC PARIONA CAYO PAUL",
    deuda: 11371.28,
    origen: "INTERBANK",
    oferta: 5231.35,
    monto_cancelacion: 4549
  },
  {
    dni: "47114623",
    nombre: "CABANILLAS COBA TATIANA VERONICA",
    deuda: 5753.28,
    origen: "INTERBANK",
    oferta: 2646.15,
    monto_cancelacion: 2301
  },
  {
    dni: "47577501",
    nombre: "CARRASCO AREVALO DANER SEGUNDO",
    deuda: 8192.59,
    origen: "INTERBANK",
    oferta: 3768.55,
    monto_cancelacion: 3277
  },
  {
    dni: "70012552",
    nombre: "CHAPARRO LEON JHEFERSONN ALBERTO",
    deuda: 5113.73,
    origen: "INTERBANK",
    oferta: 2351.75,
    monto_cancelacion: 2045
  },
  {
    dni: "72929089",
    nombre: "ASCAYO PARIONA YOBANA MARVILA",
    deuda: 8453.31,
    origen: "INTERBANK",
    oferta: 3888.15,
    monto_cancelacion: 3381
  },
  {
    dni: "73011503",
    nombre: "ADANAQUE CUSTODIO GLADYS YULIANA",
    deuda: 4328.75,
    origen: "INTERBANK",
    oferta: 1991.8,
    monto_cancelacion: 1732
  },
  {
    dni: "75711886",
    nombre: "VERA ZAMUDIO LESLIE LAURA",
    deuda: 8994.57,
    origen: "INTERBANK",
    oferta: 4137.7,
    monto_cancelacion: 3598
  },
  {
    dni: "8867706",
    nombre: "SOTERO JOYA CESAR TEOBALDO",
    deuda: 27604.24,
    origen: "INTERBANK",
    oferta: 12698.3,
    monto_cancelacion: 11042
  },
  {
    dni: "9972598",
    nombre: "MORAN SEMINARIO MARCO ANTONIO",
    deuda: 5710.07,
    origen: "INTERBANK",
    oferta: 2626.6,
    monto_cancelacion: 2284
  },
  {
    dni: "40682734",
    nombre: "QUISPE HUAMANCHA SANTIAGO EDINSON",
    deuda: 13384.44,
    origen: "INTERBANK",
    oferta: 6157.1,
    monto_cancelacion: 5354
  },
  {
    dni: "40706764",
    nombre: "CANO AQUIÑO HECTOR CARLOS",
    deuda: 7442.78,
    origen: "INTERBANK",
    oferta: 3423.55,
    monto_cancelacion: 2977
  },
  {
    dni: "41646398",
    nombre: "PORTILLA LLAJARUNA JUANA IRIS",
    deuda: 4351.15,
    origen: "INTERBANK",
    oferta: 2001.0,
    monto_cancelacion: 1740
  },
  {
    dni: "47560767",
    nombre: "PONCE CASTRO ANGELA DIANA",
    deuda: 5265.73,
    origen: "INTERBANK",
    oferta: 2421.9,
    monto_cancelacion: 2106
  },
  {
    dni: "73892527",
    nombre: "OLIVA ESCALANTE BRYAN ALEXANDER",
    deuda: 12499.31,
    origen: "INTERBANK",
    oferta: 5750.0,
    monto_cancelacion: 5000
  },
  {
    dni: "76882589",
    nombre: "SERNA VEGA JOHN ANTHONY",
    deuda: 3316.01,
    origen: "INTERBANK",
    oferta: 1524.9,
    monto_cancelacion: 1326
  },
  {
    dni: "80000965",
    nombre: "DANIEL ISAIAS HUARACA TAIPE",
    deuda: 15821.04,
    origen: "BANCO FALABELLA",
    oferta: 7277.2,
    monto_cancelacion: 6328
  },
  {
    dni: "7604460",
    nombre: "VARGAS BRIONES CESAR RAFAEL",
    deuda: 20817.83,
    origen: "INTERBANK",
    oferta: 9576.05,
    monto_cancelacion: 8327
  },
  {
    dni: "9861806",
    nombre: "OLORTEGUI FREY ROXANA LILIAN",
    deuda: 5374.03,
    origen: "INTERBANK",
    oferta: 2472.5,
    monto_cancelacion: 2150
  },
  {
    dni: "10319957",
    nombre: "ECHEVARRIA HUAMAN CLARA MARICELA",
    deuda: 18590.19,
    origen: "INTERBANK",
    oferta: 8551.4,
    monto_cancelacion: 7436
  },
  {
    dni: "16778093",
    nombre: "PUICON SALAZAR ALEXANDER",
    deuda: 16624.61,
    origen: "INTERBANK",
    oferta: 7647.5,
    monto_cancelacion: 6650
  },
  {
    dni: "17524750",
    nombre: "DAMIAN OLIVA LUIS ALBERTO",
    deuda: 21029.59,
    origen: "INTERBANK",
    oferta: 9673.8,
    monto_cancelacion: 8412
  },
  {
    dni: "18104079",
    nombre: "ACEVEDO GAVIDIA JAIME",
    deuda: 6486.85,
    origen: "INTERBANK",
    oferta: 2984.25,
    monto_cancelacion: 2595
  },
  {
    dni: "22308591",
    nombre: "SAEZ BAILETTI CARLOS ALFONSO",
    deuda: 5456.77,
    origen: "INTERBANK",
    oferta: 2510.45,
    monto_cancelacion: 2183
  },
  {
    dni: "25760853",
    nombre: "SALAZAR LOZA DE AREVALO MARITA DEL PILAR",
    deuda: 8599.77,
    origen: "BANCO FALABELLA",
    oferta: 3956.0,
    monto_cancelacion: 3440
  },
  {
    dni: "25799246",
    nombre: "MORENO ANGULO BENERANDA OLVITA",
    deuda: 8619.09,
    origen: "INTERBANK",
    oferta: 3965.2,
    monto_cancelacion: 3448
  },
  {
    dni: "32280878",
    nombre: "ESPINOZA HUERTA NOLA",
    deuda: 5162.9,
    origen: "INTERBANK",
    oferta: 2374.75,
    monto_cancelacion: 2065
  },
  {
    dni: "43949984",
    nombre: "YBIAS HITO JORGE LUIS",
    deuda: 6691.1,
    origen: "INTERBANK",
    oferta: 3077.4,
    monto_cancelacion: 2676
  },
  {
    dni: "44561342",
    nombre: "RAMIREZ LOAYZA JENNIFER HAYDEE",
    deuda: 8462.38,
    origen: "INTERBANK",
    oferta: 3892.75,
    monto_cancelacion: 3385
  },
  {
    dni: "45322278",
    nombre: "HERRERA SOTOMAYOR VANESSA DEL PILAR",
    deuda: 7793.8,
    origen: "INTERBANK",
    oferta: 3585.7,
    monto_cancelacion: 3118
  },
  {
    dni: "46532701",
    nombre: "PIZARRO LIZAMA RICARDO DICKLANDER",
    deuda: 5426.76,
    origen: "INTERBANK",
    oferta: 2496.65,
    monto_cancelacion: 2171
  },
  {
    dni: "47774092",
    nombre: "BUENDIA PAUCAR WILDER",
    deuda: 5128.71,
    origen: "INTERBANK",
    oferta: 2358.65,
    monto_cancelacion: 2051
  },
  {
    dni: "90907",
    nombre: "SERGIO PEREZ PACAYA",
    deuda: 6321.02,
    origen: "INTERBANK",
    oferta: 2907.2,
    monto_cancelacion: 2528
  },
  {
    dni: "6173459",
    nombre: "OSSANDON FLORES ANDRES MANUEL",
    deuda: 5272.97,
    origen: "INTERBANK",
    oferta: 2425.35,
    monto_cancelacion: 2109
  },
  {
    dni: "6672107",
    nombre: "AGUILAR MARTINEZ CESAR AUGUSTO",
    deuda: 3710.74,
    origen: "INTERBANK",
    oferta: 1706.6,
    monto_cancelacion: 1484
  },
  {
    dni: "7388025",
    nombre: "CASTRO ROJAS ERMINIA",
    deuda: 7917.69,
    origen: "INTERBANK",
    oferta: 3642.05,
    monto_cancelacion: 3167
  },
  {
    dni: "7854169",
    nombre: "ALIAGA GIRALDO JULIO JORGE LUIS",
    deuda: 6240.16,
    origen: "INTERBANK",
    oferta: 2870.4,
    monto_cancelacion: 2496
  },
  {
    dni: "8022802",
    nombre: "PEÑALVA ALARCO CARLOS ALFONSO",
    deuda: 4053.27,
    origen: "INTERBANK",
    oferta: 1864.15,
    monto_cancelacion: 1621
  },
  {
    dni: "9151800",
    nombre: "SANCHEZ VIDAL DE HUAMANCAJA MARITZA",
    deuda: 22496.0,
    origen: "INTERBANK",
    oferta: 10347.7,
    monto_cancelacion: 8998
  },
  {
    dni: "9446055",
    nombre: "ANGLAS MACHACUAY EDITH NANCY",
    deuda: 8149.37,
    origen: "INTERBANK",
    oferta: 3749.0,
    monto_cancelacion: 3260
  },
  {
    dni: "9885416",
    nombre: "ENCISO VARGAS ROSA MARIA",
    deuda: 3531.75,
    origen: "INTERBANK",
    oferta: 1624.95,
    monto_cancelacion: 1413
  },
  {
    dni: "9899597",
    nombre: "PINEDO MARTINEZ ALDO EFRAIN",
    deuda: 3250.88,
    origen: "INTERBANK",
    oferta: 1495.0,
    monto_cancelacion: 1300
  },
  {
    dni: "9936734",
    nombre: "YSLA ESTEVES VICTOR ENRIQUE",
    deuda: 18958.21,
    origen: "INTERBANK",
    oferta: 8720.45,
    monto_cancelacion: 7583
  },
  {
    dni: "10194554",
    nombre: "CAMONES MEJIA MILI AMPARO",
    deuda: 20129.02,
    origen: "RIPLEY",
    oferta: 9259.8,
    monto_cancelacion: 8052
  },
  {
    dni: "15447617",
    nombre: "SAAVEDRA CACERES YOHANA LUISA",
    deuda: 20001.05,
    origen: "INTERBANK",
    oferta: 9200.0,
    monto_cancelacion: 8000
  },
  {
    dni: "15669622",
    nombre: "YUPANQUI DOMINGUEZ AQUILES PEDRO",
    deuda: 4236.87,
    origen: "INTERBANK",
    oferta: 1949.25,
    monto_cancelacion: 1695
  },
  {
    dni: "15746838",
    nombre: "HUERTAS MELGAREJO ABRAHAM",
    deuda: 4290.79,
    origen: "INTERBANK",
    oferta: 1973.4,
    monto_cancelacion: 1716
  },
  {
    dni: "21876233",
    nombre: "REYES ACEVEDO JESUS ENRIQUE",
    deuda: 7309.73,
    origen: "INTERBANK",
    oferta: 3362.6,
    monto_cancelacion: 2924
  },
  {
    dni: "25455540",
    nombre: "CRUZ COLAN CARLOS PABLO LUIS",
    deuda: 27686.3,
    origen: "INTERBANK",
    oferta: 12736.25,
    monto_cancelacion: 11075
  },
  {
    dni: "25664163",
    nombre: "RAMOS FARFAN CARMEN FRIDA ANGELICA",
    deuda: 7865.3,
    origen: "INTERBANK",
    oferta: 3617.9,
    monto_cancelacion: 3146
  },
  {
    dni: "25782548",
    nombre: "AGUILAR LAGOS AIDEE LINA",
    deuda: 3779.4,
    origen: "INTERBANK",
    oferta: 1738.8,
    monto_cancelacion: 1512
  },
  {
    dni: "40380772",
    nombre: "RONCAL CHAVEZ JENNY GIANINA",
    deuda: 6104.71,
    origen: "INTERBANK",
    oferta: 2808.3,
    monto_cancelacion: 2442
  },
  {
    dni: "40733225",
    nombre: "CARBO GONZALEZ RICHARD IVAN",
    deuda: 10143.2,
    origen: "INTERBANK",
    oferta: 4665.55,
    monto_cancelacion: 4057
  },
  {
    dni: "40865654",
    nombre: "SILVA VARGAS CLEMENTE",
    deuda: 3666.94,
    origen: "INTERBANK",
    oferta: 1687.05,
    monto_cancelacion: 1467
  },
  {
    dni: "40892577",
    nombre: "AGUILAR PACHAS LUIS ALBERTO",
    deuda: 8737.33,
    origen: "INTERBANK",
    oferta: 4019.25,
    monto_cancelacion: 3495
  },
  {
    dni: "41220460",
    nombre: "RAZO GRABIEL WALTER NELSON",
    deuda: 4760.1,
    origen: "INTERBANK",
    oferta: 2189.6,
    monto_cancelacion: 1904
  },
  {
    dni: "41290683",
    nombre: "TIMANA CASTILLO SANTOS YOLANDA",
    deuda: 4736.07,
    origen: "INTERBANK",
    oferta: 2178.1,
    monto_cancelacion: 1894
  },
  {
    dni: "41302685",
    nombre: "ACCATE ROJAS APOLONIO",
    deuda: 11018.97,
    origen: "INTERBANK",
    oferta: 5069.2,
    monto_cancelacion: 4408
  },
  {
    dni: "41695574",
    nombre: "FLORES ROJAS MANUEL JAIME",
    deuda: 8724.8,
    origen: "INTERBANK",
    oferta: 4013.5,
    monto_cancelacion: 3490
  },
  {
    dni: "43419148",
    nombre: "ISLACHIN PILLACA NILDA",
    deuda: 8954.17,
    origen: "INTERBANK",
    oferta: 4119.3,
    monto_cancelacion: 3582
  },
  {
    dni: "44149401",
    nombre: "CANALES FIESTAS GIANCARLO ALEXANDER",
    deuda: 3698.7,
    origen: "INTERBANK",
    oferta: 1700.85,
    monto_cancelacion: 1479
  },
  {
    dni: "44585331",
    nombre: "SANCHEZ UNZUETA CARLOS EDUARDO YULLIANO",
    deuda: 4867.08,
    origen: "INTERBANK",
    oferta: 2239.05,
    monto_cancelacion: 1947
  },
  {
    dni: "45075838",
    nombre: "HERNANDEZ BAYONA PASTOR ALEJANDRO",
    deuda: 6251.51,
    origen: "INTERBANK",
    oferta: 2876.15,
    monto_cancelacion: 2501
  },
  {
    dni: "45114914",
    nombre: "DIAZ CUENCA JUDITH MAGALY",
    deuda: 6112.76,
    origen: "INTERBANK",
    oferta: 2811.75,
    monto_cancelacion: 2445
  },
  {
    dni: "45201729",
    nombre: "MARCOS SAYRITUPAC GLADIS OLGA",
    deuda: 3908.23,
    origen: "INTERBANK",
    oferta: 1797.45,
    monto_cancelacion: 1563
  },
  {
    dni: "45338562",
    nombre: "COTRINA URQUIAGA DENNIS",
    deuda: 3605.07,
    origen: "INTERBANK",
    oferta: 1658.3,
    monto_cancelacion: 1442
  },
  {
    dni: "46103630",
    nombre: "OLIVERA SANABRIA MIGUEL ANGEL",
    deuda: 3325.56,
    origen: "INTERBANK",
    oferta: 1529.5,
    monto_cancelacion: 1330
  },
  {
    dni: "46163079",
    nombre: "CHUJUTALLI NOLORBE PAULO ADRIAN",
    deuda: 6236.83,
    origen: "INTERBANK",
    oferta: 2869.25,
    monto_cancelacion: 2495
  },
  {
    dni: "46183086",
    nombre: "SANCHEZ CORONEL ITALA",
    deuda: 9347.88,
    origen: "INTERBANK",
    oferta: 4299.85,
    monto_cancelacion: 3739
  },
  {
    dni: "46370267",
    nombre: "GARCIA CAMPOS JACKELINE",
    deuda: 15477.87,
    origen: "INTERBANK",
    oferta: 7119.65,
    monto_cancelacion: 6191
  },
  {
    dni: "46613287",
    nombre: "XIOMARA SILVIA OLORTIGA LICONA",
    deuda: 14712.580000000002,
    origen: "BANCO FALABELLA",
    oferta: 6767.75,
    monto_cancelacion: 5885
  },
  {
    dni: "47131959",
    nombre: "ARENAS CASTILLO GUILLERMO ANDRE",
    deuda: 9451.94,
    origen: "INTERBANK",
    oferta: 4348.15,
    monto_cancelacion: 3781
  },
  {
    dni: "47133982",
    nombre: "CHUQUIVILCA PAIBA GRABIELA ARLENE",
    deuda: 4168.03,
    origen: "INTERBANK",
    oferta: 1917.05,
    monto_cancelacion: 1667
  },
  {
    dni: "47630204",
    nombre: "PAJUELO DAMAS DEYSI ISABEL",
    deuda: 9634.76,
    origen: "INTERBANK",
    oferta: 4432.1,
    monto_cancelacion: 3854
  },
  {
    dni: "48486769",
    nombre: "CARDENAS MENDOZA JULEIDY JULEIDY",
    deuda: 5913.86,
    origen: "INTERBANK",
    oferta: 2720.9,
    monto_cancelacion: 2366
  },
  {
    dni: "48544634",
    nombre: "YUPANQUI MALQUI ESPERANZA FANNY",
    deuda: 4080.35,
    origen: "INTERBANK",
    oferta: 1876.8,
    monto_cancelacion: 1632
  },
  {
    dni: "70014789",
    nombre: "GARCIA FLORES PABLO RODOLFO",
    deuda: 11071.1,
    origen: "INTERBANK",
    oferta: 5092.2,
    monto_cancelacion: 4428
  },
  {
    dni: "70353565",
    nombre: "ALVA BERNUY JOFFRE GENIX",
    deuda: 4149.26,
    origen: "INTERBANK",
    oferta: 1909.0,
    monto_cancelacion: 1660
  },
  {
    dni: "70650455",
    nombre: "RAMIREZ RODRIGUEZ NINO MAYCON",
    deuda: 3969.47,
    origen: "INTERBANK",
    oferta: 1826.2,
    monto_cancelacion: 1588
  },
  {
    dni: "71894798",
    nombre: "CABANILLAS BAZAN LINO IVAN",
    deuda: 17379.53,
    origen: "INTERBANK",
    oferta: 7994.8,
    monto_cancelacion: 6952
  },
  {
    dni: "72120061",
    nombre: "MOCARRO FONSECA GERSON ANDERSON",
    deuda: 9344.16,
    origen: "INTERBANK",
    oferta: 4298.7,
    monto_cancelacion: 3738
  },
  {
    dni: "76749514",
    nombre: "NATIVIDAD CELESTINO YANET SAYURI",
    deuda: 3335.3,
    origen: "INTERBANK",
    oferta: 1534.1,
    monto_cancelacion: 1334
  },
  {
    dni: "76765551",
    nombre: "MARTELL PEVE RUTH ANGELA",
    deuda: 4952.27,
    origen: "INTERBANK",
    oferta: 2278.15,
    monto_cancelacion: 1981
  },
  {
    dni: "77293663",
    nombre: "CHUQUICONDOR CORNEJO YOSHELIN SHOFIA",
    deuda: 8820.32,
    origen: "INTERBANK",
    oferta: 4057.2,
    monto_cancelacion: 3528
  },
  {
    dni: "80058891",
    nombre: "SERRANO SILVA NENCY EDITH",
    deuda: 11514.58,
    origen: "INTERBANK",
    oferta: 5296.9,
    monto_cancelacion: 4606
  },
  {
    dni: "40542043",
    nombre: "TRUJILLO OSORIO LUIS ENRIQUE",
    deuda: 8660.44,
    origen: "INTERBANK",
    oferta: 3983.6,
    monto_cancelacion: 3464
  },
  {
    dni: "3506867",
    nombre: "QUEREVALU PERICHE MARIA MERCEDES",
    deuda: 8809.29,
    origen: "INTERBANK",
    oferta: 4052.6,
    monto_cancelacion: 3524
  },
  {
    dni: "10091657",
    nombre: "JIMENEZ HUARACA SAUL",
    deuda: 23760.0,
    origen: "INTERBANK",
    oferta: 10929.6,
    monto_cancelacion: 9504
  },
  {
    dni: "10136535",
    nombre: "PEDRESCHI ROJAS ALDO FRANCO",
    deuda: 5144.54,
    origen: "INTERBANK",
    oferta: 2366.7,
    monto_cancelacion: 2058
  },
  {
    dni: "10346507",
    nombre: "FARIAS RENGIFO ROGER ANGEL ERACILIO",
    deuda: 8271.88,
    origen: "INTERBANK",
    oferta: 3805.35,
    monto_cancelacion: 3309
  },
  {
    dni: "25796184",
    nombre: "VALENCIA MARAZA VICTOR ALBERTO",
    deuda: 3451.04,
    origen: "INTERBANK",
    oferta: 1587.0,
    monto_cancelacion: 1380
  },
  {
    dni: "40140802",
    nombre: "GIAMPIETRI ARNILLAS SANDRA PAOLA",
    deuda: 5435.53,
    origen: "INTERBANK",
    oferta: 2500.1,
    monto_cancelacion: 2174
  },
  {
    dni: "40142362",
    nombre: "LLAMO BRAVO HERBERT RICHARD",
    deuda: 4810.6,
    origen: "INTERBANK",
    oferta: 2212.6,
    monto_cancelacion: 1924
  },
  {
    dni: "43060646",
    nombre: "LLANOS CESPEDES FIORELLA VICTORIA",
    deuda: 19557.12,
    origen: "INTERBANK",
    oferta: 8996.45,
    monto_cancelacion: 7823
  },
  {
    dni: "45472717",
    nombre: "DUAREZ FACHO JULIO CESAR",
    deuda: 14702.48,
    origen: "INTERBANK",
    oferta: 6763.15,
    monto_cancelacion: 5881
  },
  {
    dni: "46407550",
    nombre: "BAMBERGER TABARNE LOURDES WENDOLINE",
    deuda: 8837.39,
    origen: "INTERBANK",
    oferta: 4065.25,
    monto_cancelacion: 3535
  },
  {
    dni: "2611519",
    nombre: "ROMERO LESCANO PILAR DEL MILAGRO",
    deuda: 4741.44,
    origen: "INTERBANK",
    oferta: 2181.55,
    monto_cancelacion: 1897
  },
  {
    dni: "2715289",
    nombre: "CALLE LOAYZA MARY KARINA",
    deuda: 17339.6,
    origen: "INTERBANK",
    oferta: 7976.4,
    monto_cancelacion: 6936
  },
  {
    dni: "2721582",
    nombre: "CHERO TIMANA ALEJANDRINO",
    deuda: 8726.69,
    origen: "INTERBANK",
    oferta: 4014.65,
    monto_cancelacion: 3491
  },
  {
    dni: "2792666",
    nombre: "FERNANDEZ ATOCHE WAGNER ANDERSON",
    deuda: 18353.71,
    origen: "INTERBANK",
    oferta: 8442.15,
    monto_cancelacion: 7341
  },
  {
    dni: "3376806",
    nombre: "MAZA SILVA ROSA ANGELICA",
    deuda: 3355.81,
    origen: "INTERBANK",
    oferta: 1543.3,
    monto_cancelacion: 1342
  },
  {
    dni: "3489267",
    nombre: "CISNEROS GONZALES MARIA DE LOS MILAGROS",
    deuda: 10372.7,
    origen: "INTERBANK",
    oferta: 4771.35,
    monto_cancelacion: 4149
  },
  {
    dni: "3600409",
    nombre: "RAMIREZ REYES SANTOS DEL ROSARIO",
    deuda: 4934.78,
    origen: "INTERBANK",
    oferta: 2270.1,
    monto_cancelacion: 1974
  },
  {
    dni: "4005990",
    nombre: "HUAMAN CASTILLO ZOILA ELIZABETH",
    deuda: 10823.77,
    origen: "INTERBANK",
    oferta: 4979.5,
    monto_cancelacion: 4330
  },
  {
    dni: "6015593",
    nombre: "CRUZ MEDINA ROXANA CONSUELO",
    deuda: 3878.65,
    origen: "INTERBANK",
    oferta: 1783.65,
    monto_cancelacion: 1551
  },
  {
    dni: "6707449",
    nombre: "HERNANDEZ ALFARO MIGUEL ALBERTO",
    deuda: 8712.81,
    origen: "INTERBANK",
    oferta: 4007.75,
    monto_cancelacion: 3485
  },
  {
    dni: "8414113",
    nombre: "HUAMANI OBANDO DE ALLPAS ROXANA",
    deuda: 9116.15,
    origen: "INTERBANK",
    oferta: 4192.9,
    monto_cancelacion: 3646
  },
  {
    dni: "9037626",
    nombre: "LEGUA GARCIA DE TUANAMA CARMEN GLADYS",
    deuda: 18010.24,
    origen: "INTERBANK",
    oferta: 8284.6,
    monto_cancelacion: 7204
  },
  {
    dni: "9227733",
    nombre: "TORRES HORNA MARTIN",
    deuda: 13148.66,
    origen: "INTERBANK",
    oferta: 6047.85,
    monto_cancelacion: 5259
  },
  {
    dni: "10081865",
    nombre: "CUSI COLLADO ELOY LUIS",
    deuda: 7508.46,
    origen: "INTERBANK",
    oferta: 3453.45,
    monto_cancelacion: 3003
  },
  {
    dni: "16802636",
    nombre: "DIAZ SALAZAR MARTIN",
    deuda: 4866.19,
    origen: "INTERBANK",
    oferta: 2237.9,
    monto_cancelacion: 1946
  },
  {
    dni: "18070977",
    nombre: "ALVARADO ROMERO WILLIAM ALBERTO",
    deuda: 23147.93,
    origen: "INTERBANK",
    oferta: 10647.85,
    monto_cancelacion: 9259
  },
  {
    dni: "18187088",
    nombre: "MARCELO PEÑA ALBERTO ELISEO",
    deuda: 4186.21,
    origen: "INTERBANK",
    oferta: 1925.1,
    monto_cancelacion: 1674
  },
  {
    dni: "18205741",
    nombre: "CARRANZA QUISPE LUCRECIA YOVANA",
    deuda: 3113.62,
    origen: "INTERBANK",
    oferta: 1431.75,
    monto_cancelacion: 1245
  },
  {
    dni: "19081679",
    nombre: "VIGO GARCIA ROSA LILIANA",
    deuda: 9355.52,
    origen: "INTERBANK",
    oferta: 4303.3,
    monto_cancelacion: 3742
  },
  {
    dni: "20053510",
    nombre: "ROJAS MARTINEZ ELIDA FLOR",
    deuda: 13084.65,
    origen: "INTERBANK",
    oferta: 6019.1,
    monto_cancelacion: 5234
  },
  {
    dni: "25502763",
    nombre: "QUISPE GARCIA JUAN ALFONSO",
    deuda: 4733.6,
    origen: "INTERBANK",
    oferta: 2176.95,
    monto_cancelacion: 1893
  },
  {
    dni: "31158659",
    nombre: "ACOSTA OCHOA JUAN FELIPE",
    deuda: 13835.99,
    origen: "INTERBANK",
    oferta: 6364.1,
    monto_cancelacion: 5534
  },
  {
    dni: "32859604",
    nombre: "BARRETO VIDAL JOSE MARIA",
    deuda: 4663.97,
    origen: "INTERBANK",
    oferta: 2145.9,
    monto_cancelacion: 1866
  },
  {
    dni: "33568449",
    nombre: "PITA DAVILA CESAR RAMIRO",
    deuda: 3304.32,
    origen: "INTERBANK",
    oferta: 1520.3,
    monto_cancelacion: 1322
  },
  {
    dni: "40219204",
    nombre: "SANCHEZ CARHUAY ROGER JHON",
    deuda: 6451.84,
    origen: "INTERBANK",
    oferta: 2968.15,
    monto_cancelacion: 2581
  },
  {
    dni: "40405604",
    nombre: "MELGAREJO HUERTA PABLO GERMAN",
    deuda: 5801.84,
    origen: "INTERBANK",
    oferta: 2669.15,
    monto_cancelacion: 2321
  },
  {
    dni: "41944604",
    nombre: "PERALTA VASQUEZ LUDWIN MERLIN",
    deuda: 8775.8,
    origen: "INTERBANK",
    oferta: 4036.5,
    monto_cancelacion: 3510
  },
  {
    dni: "41971409",
    nombre: "ARCE PAITAN HENRY WATSON",
    deuda: 15640.59,
    origen: "INTERBANK",
    oferta: 7194.4,
    monto_cancelacion: 6256
  },
  {
    dni: "41971927",
    nombre: "ARANGO DOLORIER ANDREA VERONICA",
    deuda: 9422.96,
    origen: "INTERBANK",
    oferta: 4334.35,
    monto_cancelacion: 3769
  },
  {
    dni: "42830991",
    nombre: "PURISACA LUCANA JOSE MARTIN",
    deuda: 11700.05,
    origen: "INTERBANK",
    oferta: 5382.0,
    monto_cancelacion: 4680
  },
  {
    dni: "43928120",
    nombre: "ROJAS PEREZ JOSE LUIS",
    deuda: 5096.82,
    origen: "INTERBANK",
    oferta: 2344.85,
    monto_cancelacion: 2039
  },
  {
    dni: "45492828",
    nombre: "MORENO HUAMAN RAUL DANIEL",
    deuda: 4351.18,
    origen: "INTERBANK",
    oferta: 2001.0,
    monto_cancelacion: 1740
  },
  {
    dni: "45633758",
    nombre: "BUTRON HERNANDO BILLY EDWARD",
    deuda: 5148.53,
    origen: "INTERBANK",
    oferta: 2367.85,
    monto_cancelacion: 2059
  },
  {
    dni: "45798636",
    nombre: "LUIS NARRO JULISA PEREGRINA",
    deuda: 7513.07,
    origen: "INTERBANK",
    oferta: 3455.75,
    monto_cancelacion: 3005
  },
  {
    dni: "46519623",
    nombre: "MESTANZA RAMIREZ ROBERT JHONY",
    deuda: 9514.8,
    origen: "INTERBANK",
    oferta: 4376.9,
    monto_cancelacion: 3806
  },
  {
    dni: "46919820",
    nombre: "POVES PAUCARCAJA KANDY ZULEMA",
    deuda: 5986.75,
    origen: "INTERBANK",
    oferta: 2754.25,
    monto_cancelacion: 2395
  },
  {
    dni: "47768610",
    nombre: "ROSALES VIGIL JEFFERSON KEVIN",
    deuda: 13618.94,
    origen: "INTERBANK",
    oferta: 6265.2,
    monto_cancelacion: 5448
  },
  {
    dni: "48503112",
    nombre: "MORALES NAZARIO RICARDO STEVENSON",
    deuda: 4132.5,
    origen: "INTERBANK",
    oferta: 1900.95,
    monto_cancelacion: 1653
  },
  {
    dni: "72172924",
    nombre: "HUAMAN NUÑEZ MELISSA GABRIELA",
    deuda: 4655.28,
    origen: "INTERBANK",
    oferta: 2141.3,
    monto_cancelacion: 1862
  },
  {
    dni: "72739462",
    nombre: "CASTAÑEDA SALAS ANDREA ALEJANDRA",
    deuda: 4545.77,
    origen: "INTERBANK",
    oferta: 2090.7,
    monto_cancelacion: 1818
  },
  {
    dni: "73057609",
    nombre: "RAMOS CONCHE ANDREA PATRICIA",
    deuda: 8578.04,
    origen: "INTERBANK",
    oferta: 3945.65,
    monto_cancelacion: 3431
  },
  {
    dni: "8120577",
    nombre: "ESPINOZA BERNEDO ALFREDO HIPOLITO",
    deuda: 3629.28,
    origen: "INTERBANK",
    oferta: 1669.8,
    monto_cancelacion: 1452
  },
  {
    dni: "47902837",
    nombre: "ALACHE NUÑEZ JEAN DIEGO",
    deuda: 6250.64,
    origen: "INTERBANK",
    oferta: 2875.0,
    monto_cancelacion: 2500
  },
  {
    dni: "3610589",
    nombre: "CORDOVA CAMACHO ROSENDO",
    deuda: 7779.4,
    origen: "INTERBANK",
    oferta: 3578.8,
    monto_cancelacion: 3112
  },
  {
    dni: "4054196",
    nombre: "SANCHEZ SUAREZ CLEMENTE TOLENTINO",
    deuda: 20593.97,
    origen: "INTERBANK",
    oferta: 9473.7,
    monto_cancelacion: 8238
  },
  {
    dni: "6264560",
    nombre: "HUAMANI HUAYTALLA MARIA ROSA",
    deuda: 4892.2,
    origen: "INTERBANK",
    oferta: 2250.55,
    monto_cancelacion: 1957
  },
  {
    dni: "6382585",
    nombre: "LUIS ANGELES DE RIVERA IRMA GUDELIA",
    deuda: 12923.38,
    origen: "INTERBANK",
    oferta: 5944.35,
    monto_cancelacion: 5169
  },
  {
    dni: "7039811",
    nombre: "AVILA HIGINIO VICTOR MANUEL",
    deuda: 19524.36,
    origen: "INTERBANK",
    oferta: 8981.5,
    monto_cancelacion: 7810
  },
  {
    dni: "7541881",
    nombre: "MENDOZA HALLASI ANTONIO",
    deuda: 6336.38,
    origen: "INTERBANK",
    oferta: 2915.25,
    monto_cancelacion: 2535
  },
  {
    dni: "7878162",
    nombre: "DIAZ AGARINI FRANKLIN BENEDICTO",
    deuda: 13388.76,
    origen: "INTERBANK",
    oferta: 6159.4,
    monto_cancelacion: 5356
  },
  {
    dni: "9182991",
    nombre: "NAVEDA ALTHAUS OMAR MANUEL",
    deuda: 3282.74,
    origen: "INTERBANK",
    oferta: 1509.95,
    monto_cancelacion: 1313
  },
  {
    dni: "9255036",
    nombre: "PACHERRES LLOCLLA HUGO",
    deuda: 10879.699999999999,
    origen: "INTERBANK",
    oferta: 5004.8,
    monto_cancelacion: 4352
  },
  {
    dni: "9427488",
    nombre: "CARDOSO MARQUINA ANA MELBA",
    deuda: 3386.28,
    origen: "INTERBANK",
    oferta: 1558.25,
    monto_cancelacion: 1355
  },
  {
    dni: "9650178",
    nombre: "SANCHEZ CHAN JOHNNY",
    deuda: 17915.0,
    origen: "INTERBANK",
    oferta: 8240.9,
    monto_cancelacion: 7166
  },
  {
    dni: "9933248",
    nombre: "MENDOZA ALCA CARLOS ENRIQUE",
    deuda: 5381.1,
    origen: "INTERBANK",
    oferta: 2474.8,
    monto_cancelacion: 2152
  },
  {
    dni: "9991625",
    nombre: "AGUILERA ACOSTA ALEX",
    deuda: 8140.38,
    origen: "INTERBANK",
    oferta: 3744.4,
    monto_cancelacion: 3256
  },
  {
    dni: "10509147",
    nombre: "ESCALANTE HINOSTROZA EFRAIN",
    deuda: 3049.23,
    origen: "INTERBANK",
    oferta: 1403.0,
    monto_cancelacion: 1220
  },
  {
    dni: "10614022",
    nombre: "MARIA LUISA ALVAREZ CASTRO",
    deuda: 4185.67,
    origen: "BANCO FALABELLA",
    oferta: 1925.1,
    monto_cancelacion: 1674
  },
  {
    dni: "15280711",
    nombre: "GOMEZ OTAROLA MARIA LOURDES",
    deuda: 10392.2,
    origen: "INTERBANK",
    oferta: 4780.55,
    monto_cancelacion: 4157
  },
  {
    dni: "16477680",
    nombre: "TRUJILLANO MUÑOZ CARLOS",
    deuda: 6765.2,
    origen: "INTERBANK",
    oferta: 3111.9,
    monto_cancelacion: 2706
  },
  {
    dni: "16510273",
    nombre: "TORRES VASQUEZ MARGARITA",
    deuda: 3462.44,
    origen: "INTERBANK",
    oferta: 1592.75,
    monto_cancelacion: 1385
  },
  {
    dni: "18100375",
    nombre: "LEYTON RODRIGUEZ MAURO ALBERTO",
    deuda: 3064.7,
    origen: "INTERBANK",
    oferta: 1409.9,
    monto_cancelacion: 1226
  },
  {
    dni: "18853802",
    nombre: "UGALDEZ ORTIZ MARIA NELLY",
    deuda: 5917.58,
    origen: "INTERBANK",
    oferta: 2722.05,
    monto_cancelacion: 2367
  },
  {
    dni: "21242846",
    nombre: "GALARZA AYLAS JULIAN",
    deuda: 5605.24,
    origen: "INTERBANK",
    oferta: 2578.3,
    monto_cancelacion: 2242
  },
  {
    dni: "21461966",
    nombre: "SANCHEZ VASQUEZ DORLISA",
    deuda: 8248.47,
    origen: "INTERBANK",
    oferta: 3793.85,
    monto_cancelacion: 3299
  },
  {
    dni: "23964126",
    nombre: "WAGNER COSIO GIOVANA",
    deuda: 9338.88,
    origen: "INTERBANK",
    oferta: 4296.4,
    monto_cancelacion: 3736
  },
  {
    dni: "25563422",
    nombre: "HUAMAN LEON MIRYAM MERCEDES",
    deuda: 12298.24,
    origen: "INTERBANK",
    oferta: 5656.85,
    monto_cancelacion: 4919
  },
  {
    dni: "25766015",
    nombre: "TAVARA JIBAJA JULIO CESAR",
    deuda: 9173.8,
    origen: "INTERBANK",
    oferta: 4220.5,
    monto_cancelacion: 3670
  },
  {
    dni: "25804007",
    nombre: "BASKOVICH BALLON CESAR AUGUSTO MARTIN",
    deuda: 20657.98,
    origen: "INTERBANK",
    oferta: 9502.45,
    monto_cancelacion: 8263
  },
  {
    dni: "28271007",
    nombre: "VARGAS MORENO LIDA CRISTINA",
    deuda: 3524.88,
    origen: "INTERBANK",
    oferta: 1621.5,
    monto_cancelacion: 1410
  },
  {
    dni: "28714455",
    nombre: "DURAND NAJARRO DEMETRIO",
    deuda: 12569.29,
    origen: "INTERBANK",
    oferta: 5782.2,
    monto_cancelacion: 5028
  },
  {
    dni: "29388838",
    nombre: "RIVERA FERNANDEZ OSCAR",
    deuda: 5961.07,
    origen: "INTERBANK",
    oferta: 2741.6,
    monto_cancelacion: 2384
  },
  {
    dni: "32981785",
    nombre: "CHAVEZ NIEVES WALTER DINO",
    deuda: 6154.05,
    origen: "INTERBANK",
    oferta: 2831.3,
    monto_cancelacion: 2462
  },
  {
    dni: "40009524",
    nombre: "YALLE PAREDES JHON LOYD",
    deuda: 5022.24,
    origen: "INTERBANK",
    oferta: 2310.35,
    monto_cancelacion: 2009
  },
  {
    dni: "40190632",
    nombre: "FLORES MARTINEZ JACKELINE BEATRIZ",
    deuda: 7535.12,
    origen: "INTERBANK",
    oferta: 3466.1,
    monto_cancelacion: 3014
  },
  {
    dni: "40249748",
    nombre: "CAMPOS TORRES GINA DEBORA",
    deuda: 6406.2,
    origen: "INTERBANK",
    oferta: 2946.3,
    monto_cancelacion: 2562
  },
  {
    dni: "40489263",
    nombre: "NAVARRO CAVERO MARTIN ANTONIO",
    deuda: 5170.27,
    origen: "INTERBANK",
    oferta: 2378.2,
    monto_cancelacion: 2068
  },
  {
    dni: "40707691",
    nombre: "CULQUI DA COSTA NEYSA MILAGROS",
    deuda: 9918.75,
    origen: "INTERBANK",
    oferta: 4563.2,
    monto_cancelacion: 3968
  },
  {
    dni: "41407036",
    nombre: "PURACA OVADA PATRICIA NELLY",
    deuda: 45034.46,
    origen: "INTERBANK",
    oferta: 20716.1,
    monto_cancelacion: 18014
  },
  {
    dni: "41583993",
    nombre: "LEON PLASENCIA CARLOS ERASMO",
    deuda: 14470.03,
    origen: "INTERBANK",
    oferta: 6656.2,
    monto_cancelacion: 5788
  },
  {
    dni: "42073114",
    nombre: "ALAYO CHANDUVI DEIVEE DARWIN",
    deuda: 17033.78,
    origen: "INTERBANK",
    oferta: 7836.1,
    monto_cancelacion: 6814
  },
  {
    dni: "42077346",
    nombre: "VERNACHEA TOLEDO YESSICA YOVANA",
    deuda: 3322.98,
    origen: "INTERBANK",
    oferta: 1528.35,
    monto_cancelacion: 1329
  },
  {
    dni: "42201650",
    nombre: "SALDAÑA PISCES JHONN TONY",
    deuda: 4685.0,
    origen: "INTERBANK",
    oferta: 2155.1,
    monto_cancelacion: 1874
  },
  {
    dni: "43639840",
    nombre: "BERMEJO SILVA YESMI ESMI",
    deuda: 7068.92,
    origen: "INTERBANK",
    oferta: 3252.2,
    monto_cancelacion: 2828
  },
  {
    dni: "43881655",
    nombre: "RODRIGUEZ FARFAN LUIS MARTIN",
    deuda: 7303.77,
    origen: "INTERBANK",
    oferta: 3360.3,
    monto_cancelacion: 2922
  },
  {
    dni: "44007496",
    nombre: "CARO CORDOVA VILMA",
    deuda: 7941.62,
    origen: "INTERBANK",
    oferta: 3653.55,
    monto_cancelacion: 3177
  },
  {
    dni: "44263830",
    nombre: "PEREZ LANDA JOSE LUIS",
    deuda: 3304.99,
    origen: "INTERBANK",
    oferta: 1520.3,
    monto_cancelacion: 1322
  },
  {
    dni: "44563255",
    nombre: "ATACHAGUA YUPANQUI ARELY OLGA",
    deuda: 10645.11,
    origen: "INTERBANK",
    oferta: 4896.7,
    monto_cancelacion: 4258
  },
  {
    dni: "44752276",
    nombre: "LOAYZA FIESTAS ANA CECILIA DE LOS ANGEL",
    deuda: 5143.77,
    origen: "INTERBANK",
    oferta: 2366.7,
    monto_cancelacion: 2058
  },
  {
    dni: "45750137",
    nombre: "DIAZ ANGULO LUZ IVONE",
    deuda: 6614.06,
    origen: "INTERBANK",
    oferta: 3042.9,
    monto_cancelacion: 2646
  },
  {
    dni: "45775334",
    nombre: "MUÑOZ SOTO FRANCO IVAN",
    deuda: 5046.14,
    origen: "INTERBANK",
    oferta: 2320.7,
    monto_cancelacion: 2018
  },
  {
    dni: "46235424",
    nombre: "ZEA FERNANDEZ KELY ROCIO",
    deuda: 3130.32,
    origen: "INTERBANK",
    oferta: 1439.8,
    monto_cancelacion: 1252
  },
  {
    dni: "46394089",
    nombre: "MORENO SOTO TIFFANY NOHELY",
    deuda: 8012.0,
    origen: "INTERBANK",
    oferta: 3685.75,
    monto_cancelacion: 3205
  },
  {
    dni: "46422967",
    nombre: "RAMIREZ PIÑA LUIS ALBERTO",
    deuda: 6366.8,
    origen: "INTERBANK",
    oferta: 2929.05,
    monto_cancelacion: 2547
  },
  {
    dni: "46731943",
    nombre: "RIEGA ZANABRIA CYNTHIA MILAGROS",
    deuda: 4451.66,
    origen: "INTERBANK",
    oferta: 2048.15,
    monto_cancelacion: 1781
  },
  {
    dni: "47156905",
    nombre: "NIETO HINOJOSA DELIA",
    deuda: 12814.63,
    origen: "INTERBANK",
    oferta: 5894.9,
    monto_cancelacion: 5126
  },
  {
    dni: "47162864",
    nombre: "CALDERON-URQUIZO LARCO CARLA FIORELLA",
    deuda: 7530.45,
    origen: "INTERBANK",
    oferta: 3463.8,
    monto_cancelacion: 3012
  },
  {
    dni: "47168889",
    nombre: "PANTA REQUENA CARLOS NOELIO",
    deuda: 4212.78,
    origen: "INTERBANK",
    oferta: 1937.75,
    monto_cancelacion: 1685
  },
  {
    dni: "47389923",
    nombre: "RAMOS ASENCIOS EFRAIN MANASES",
    deuda: 11659.85,
    origen: "INTERBANK",
    oferta: 5363.6,
    monto_cancelacion: 4664
  },
  {
    dni: "47743580",
    nombre: "TIBURSKI DASILVA JOZIELE",
    deuda: 16530.3,
    origen: "INTERBANK",
    oferta: 7603.8,
    monto_cancelacion: 6612
  },
  {
    dni: "60697820",
    nombre: "REYES GOMEZ FRANK JOSEPH",
    deuda: 3062.58,
    origen: "INTERBANK",
    oferta: 1408.75,
    monto_cancelacion: 1225
  },
  {
    dni: "72869735",
    nombre: "TORRES LIRA DIEGO",
    deuda: 8122.36,
    origen: "INTERBANK",
    oferta: 3736.35,
    monto_cancelacion: 3249
  },
  {
    dni: "75130673",
    nombre: "FRANCO FLORES DARIO ESTEBAN",
    deuda: 28719.64,
    origen: "INTERBANK",
    oferta: 13211.2,
    monto_cancelacion: 11488
  },
  {
    dni: "76568229",
    nombre: "VEREAU MESTANZA DULCE LUCERO",
    deuda: 4229.65,
    origen: "INTERBANK",
    oferta: 1945.8,
    monto_cancelacion: 1692
  },
  {
    dni: "76665835",
    nombre: "PARINANGO TOMAS DANIELA THALIA",
    deuda: 11544.67,
    origen: "INTERBANK",
    oferta: 5310.7,
    monto_cancelacion: 4618
  },
  {
    dni: "77355972",
    nombre: "QUIROZ OSORIO DIEGO MAURICIO",
    deuda: 7689.32,
    origen: "INTERBANK",
    oferta: 3537.4,
    monto_cancelacion: 3076
  },
  {
    dni: "80420718",
    nombre: "PONCE PEREZ ALEX OMAR",
    deuda: 9958.67,
    origen: "INTERBANK",
    oferta: 4580.45,
    monto_cancelacion: 3983
  },
  {
    dni: "3855856",
    nombre: "TITO EULOGIO CHEVEZ MERINO",
    deuda: 67863.42,
    origen: "BANCO FALABELLA",
    oferta: 27314.8,
    monto_cancelacion: 23752
  },
  {
    dni: "29626765",
    nombre: "ALEXANDER NICOLAE BERNEDO DELGADO",
    deuda: 55444.759999999995,
    origen: "BANCO FALABELLA",
    oferta: 22316.9,
    monto_cancelacion: 19406
  },
  {
    dni: "10658774",
    nombre: "KARLA GIOVANNA RODRIGUEZ HAWKINS",
    deuda: 39312.69,
    origen: "BCP",
    oferta: 15822.85,
    monto_cancelacion: 13759
  },
  {
    dni: "2807237",
    nombre: "SEVERINO VITE MANUEL VICENTE",
    deuda: 51574.67,
    origen: "BANCO FALABELLA",
    oferta: 17792.8,
    monto_cancelacion: 15472
  },
  {
    dni: "2857945",
    nombre: "BLANCA HAYDEE PEREZ ORTIZ",
    deuda: 4513.77,
    origen: "BANCO FALABELLA",
    oferta: 1557.1,
    monto_cancelacion: 1354
  },
  {
    dni: "9295238",
    nombre: "ARMANDO JESUS TELLO SANCHEZ",
    deuda: 3077.84,
    origen: "BANCO FALABELLA",
    oferta: 1061.45,
    monto_cancelacion: 923
  },
  {
    dni: "9955052",
    nombre: "ZEVALLOS GUTIERREZ KARLOS ALFREDO",
    deuda: 29508.3,
    origen: "BCP",
    oferta: 10179.8,
    monto_cancelacion: 8852
  },
  {
    dni: "10202126",
    nombre: "IVER CABELLO SANCHEZ",
    deuda: 78131.3,
    origen: "BANCO FALABELLA",
    oferta: 26954.85,
    monto_cancelacion: 23439
  },
  {
    dni: "10215553",
    nombre: "RAFAEL SANDRO LOAYZA CARDENAS",
    deuda: 32220.54,
    origen: "BANCO FALABELLA",
    oferta: 11115.9,
    monto_cancelacion: 9666
  },
  {
    dni: "10693082",
    nombre: "DIANA YASMIN CALDERON ESTRADA",
    deuda: 23661.29,
    origen: "BANCO FALABELLA",
    oferta: 8162.7,
    monto_cancelacion: 7098
  },
  {
    dni: "10789143",
    nombre: "CARMEN SOPLOPUCO SOPLOPUCO",
    deuda: 2920.19,
    origen: "BANCO FALABELLA",
    oferta: 1007.4,
    monto_cancelacion: 876
  },
  {
    dni: "16778535",
    nombre: "CESAR AUGUSTO IBACETA BERECHE",
    deuda: 10286.32,
    origen: "BANCO FALABELLA",
    oferta: 3548.9,
    monto_cancelacion: 3086
  },
  {
    dni: "16806975",
    nombre: "CESPEDES RAMOS LIDIA RUBI",
    deuda: 10841.02,
    origen: "BANCO FALABELLA",
    oferta: 3739.8,
    monto_cancelacion: 3252
  },
  {
    dni: "25631150",
    nombre: "ANA ESPERANZA TELLO CARRERA",
    deuda: 14282.32,
    origen: "BANCO FALABELLA",
    oferta: 4927.75,
    monto_cancelacion: 4285
  },
  {
    dni: "25717029",
    nombre: "SANCHEZ MATEO GRACIELA MARIA",
    deuda: 5238.02,
    origen: "RIPLEY",
    oferta: 1806.65,
    monto_cancelacion: 1571
  },
  {
    dni: "27295736",
    nombre: "JOEL ACENJO ESTELA",
    deuda: 7130.15,
    origen: "BANCO FALABELLA",
    oferta: 2459.85,
    monto_cancelacion: 2139
  },
  {
    dni: "30425161",
    nombre: "JORGE ENRIQUE CHAVEZ ANDIA",
    deuda: 10326.14,
    origen: "BANCO FALABELLA",
    oferta: 3562.7,
    monto_cancelacion: 3098
  },
  {
    dni: "32541418",
    nombre: "JUAN HENRY MARTINEZ GONZALES",
    deuda: 53471.83,
    origen: "BCP",
    oferta: 18448.3,
    monto_cancelacion: 16042
  },
  {
    dni: "40797741",
    nombre: "PERCY ALONSO HURTADO CIURLIZZA",
    deuda: 1496.17,
    origen: "BANCO FALABELLA",
    oferta: 516.35,
    monto_cancelacion: 449
  },
  {
    dni: "40985912",
    nombre: "RONALD JOSE CAMPOS CASTILLO",
    deuda: 1387.38,
    origen: "BANCO FALABELLA",
    oferta: 478.4,
    monto_cancelacion: 416
  },
  {
    dni: "41121061",
    nombre: "WILLAN GAMONAL LOAYZA",
    deuda: 1404.49,
    origen: "BANCO FALABELLA",
    oferta: 484.15,
    monto_cancelacion: 421
  },
  {
    dni: "41249149",
    nombre: "JENIFFER BERINA SANCHEZ CHILE",
    deuda: 9843.77,
    origen: "BANCO FALABELLA",
    oferta: 3395.95,
    monto_cancelacion: 2953
  },
  {
    dni: "41685465",
    nombre: "JONNATTAN JEYSON GALLEGOS MORALES",
    deuda: 2013.53,
    origen: "BANCO FALABELLA",
    oferta: 694.6,
    monto_cancelacion: 604
  },
  {
    dni: "41789201",
    nombre: "VICTORIA MILAGROS PINILLOS GUERRERO",
    deuda: 10221.13,
    origen: "BANCO FALABELLA",
    oferta: 3525.9,
    monto_cancelacion: 3066
  },
  {
    dni: "41944913",
    nombre: "SUSANA BEATRIZ HARO BARBOZA",
    deuda: 1871.76,
    origen: "INTERBANK",
    oferta: 646.3,
    monto_cancelacion: 562
  },
  {
    dni: "43019038",
    nombre: "CESAR GABINO AGUILAR LIMA",
    deuda: 2415.95,
    origen: "BANCO FALABELLA",
    oferta: 833.75,
    monto_cancelacion: 725
  },
  {
    dni: "43409110",
    nombre: "MERARI ALEJANDRO CORAL ALVINO",
    deuda: 16749.23,
    origen: "BANCO FALABELLA",
    oferta: 5778.75,
    monto_cancelacion: 5025
  },
  {
    dni: "43829941",
    nombre: "MARCOS MANUEL MARQUEZ ANGULO",
    deuda: 4814.63,
    origen: "BANCO FALABELLA",
    oferta: 1660.6,
    monto_cancelacion: 1444
  },
  {
    dni: "43896468",
    nombre: "JULIO CESAR BERNABE QUIROZ",
    deuda: 4434.48,
    origen: "BANCO FALABELLA",
    oferta: 1529.5,
    monto_cancelacion: 1330
  },
  {
    dni: "44626546",
    nombre: "CRISTIAN OMAR SANCHEZ CASTRO",
    deuda: 9384.0,
    origen: "BANCO FALABELLA",
    oferta: 3237.25,
    monto_cancelacion: 2815
  },
  {
    dni: "44775732",
    nombre: "HILDA MARILU TELLO TUCTO",
    deuda: 2555.57,
    origen: "INTERBANK",
    oferta: 882.05,
    monto_cancelacion: 767
  },
  {
    dni: "45014596",
    nombre: "HUGO MOISES BULNES VASQUEZ",
    deuda: 2657.87,
    origen: "BANCO FALABELLA",
    oferta: 916.55,
    monto_cancelacion: 797
  },
  {
    dni: "45267175",
    nombre: "YANINA RAMOS CASTILLO",
    deuda: 2538.13,
    origen: "BANCO FALABELLA",
    oferta: 875.15,
    monto_cancelacion: 761
  },
  {
    dni: "45480511",
    nombre: "PAUL ROBERT YLLANES RAMIREZ",
    deuda: 29420.69,
    origen: "BANCO FALABELLA",
    oferta: 10149.9,
    monto_cancelacion: 8826
  },
  {
    dni: "46077929",
    nombre: "JHON DARWIN LESCANO FLORES",
    deuda: 11684.699999999999,
    origen: "BANCO FALABELLA",
    oferta: 4030.75,
    monto_cancelacion: 3505
  },
  {
    dni: "46576628",
    nombre: "JOSE ALONSO RAMIREZ MORALES",
    deuda: 1509.34,
    origen: "BANCO FALABELLA",
    oferta: 520.95,
    monto_cancelacion: 453
  },
  {
    dni: "46684771",
    nombre: "CHUQUIHUANGA JULCAHUANGA MIRIAM ISABETH",
    deuda: 32293.01,
    origen: "INTERBANK",
    oferta: 11141.2,
    monto_cancelacion: 9688
  },
  {
    dni: "46790221",
    nombre: "JUAN CARLOS QUINONES NEVADO",
    deuda: 20103.8,
    origen: "BCP",
    oferta: 6935.65,
    monto_cancelacion: 6031
  },
  {
    dni: "46871298",
    nombre: "SILENE MENDOZA HUAIRA",
    deuda: 5856.07,
    origen: "BANCO FALABELLA",
    oferta: 2020.55,
    monto_cancelacion: 1757
  },
  {
    dni: "47049444",
    nombre: "DIEGO ALONSO SANCHEZ CASTRO",
    deuda: 9622.18,
    origen: "BANCO FALABELLA",
    oferta: 3320.05,
    monto_cancelacion: 2887
  },
  {
    dni: "47395991",
    nombre: "JORGE LUIS BALLON CASTILLO",
    deuda: 7769.13,
    origen: "BANCO FALABELLA",
    oferta: 2680.65,
    monto_cancelacion: 2331
  },
  {
    dni: "48185053",
    nombre: "DANNY ALEXIS TITO LOPEZ",
    deuda: 1511.79,
    origen: "BANCO FALABELLA",
    oferta: 522.1,
    monto_cancelacion: 454
  },
  {
    dni: "72310152",
    nombre: "MADAID ALICIA AREVALO RAMOS",
    deuda: 1183.78,
    origen: "BCP",
    oferta: 408.25,
    monto_cancelacion: 355
  },
  {
    dni: "80390661",
    nombre: "NANCY MORE SANDOVAL",
    deuda: 2089.47,
    origen: "BANCO FALABELLA",
    oferta: 721.05,
    monto_cancelacion: 627
  },
  {
    dni: "2857437",
    nombre: "CLAUDIA VALDIVIESO CERDEÐA",
    deuda: 16549.79,
    origen: "BANCO FALABELLA",
    oferta: 5709.75,
    monto_cancelacion: 4965
  },
  {
    dni: "3659870",
    nombre: "RAYMUNDO FRANCISCO OBLEA MEDINA",
    deuda: 2849.31,
    origen: "BCP",
    oferta: 983.25,
    monto_cancelacion: 855
  },
  {
    dni: "8423376",
    nombre: "ROSITA HAYDEE CASTILLO HERRERA",
    deuda: 12113.59,
    origen: "BANCO FALABELLA",
    oferta: 4179.1,
    monto_cancelacion: 3634
  },
  {
    dni: "8945923",
    nombre: "MIGUEL ANGEL TORRES CORTEZ",
    deuda: 2301.66,
    origen: "BANCO FALABELLA",
    oferta: 793.5,
    monto_cancelacion: 690
  },
  {
    dni: "9840608",
    nombre: "FAVIO ROMMEL JANAMPA FUERTES",
    deuda: 9105.68,
    origen: "BANCO FALABELLA",
    oferta: 3141.8,
    monto_cancelacion: 2732
  },
  {
    dni: "9872496",
    nombre: "LUIS MARTIN MORALES BENAVENTE",
    deuda: 25721.65,
    origen: "INTERBANK",
    oferta: 8873.4,
    monto_cancelacion: 7716
  },
  {
    dni: "9903646",
    nombre: "GIRALDO QUINTANA DE CAMPAÑA MARIA LUZ",
    deuda: 1855.07,
    origen: "RIPLEY",
    oferta: 640.55,
    monto_cancelacion: 557
  },
  {
    dni: "10122564",
    nombre: "JOHNNY ALBINO RODRIGUEZ VENTURA",
    deuda: 7435.34,
    origen: "BANCO FALABELLA",
    oferta: 2565.65,
    monto_cancelacion: 2231
  },
  {
    dni: "10126401",
    nombre: "HUALLPA HANCCO TANIA LAURA",
    deuda: 24062.45,
    origen: "INTERBANK",
    oferta: 8301.85,
    monto_cancelacion: 7219
  },
  {
    dni: "10238219",
    nombre: "PERCY ALBERTO MANRIQUE GOICOCHEA",
    deuda: 3573.15,
    origen: "BCP",
    oferta: 1232.8,
    monto_cancelacion: 1072
  },
  {
    dni: "10501162",
    nombre: "SARA ROSANIE PALACIOS IRAMATEGUI",
    deuda: 11512.89,
    origen: "BANCO FALABELLA",
    oferta: 3972.1,
    monto_cancelacion: 3454
  },
  {
    dni: "16520609",
    nombre: "DIAZ REQUE MARIA YULIANA",
    deuda: 6027.67,
    origen: "BANCO FALABELLA",
    oferta: 2079.2,
    monto_cancelacion: 1808
  },
  {
    dni: "18053259",
    nombre: "ARMAS MEDINA SANTOS EULALIA",
    deuda: 1245.77,
    origen: "MIBANCO",
    oferta: 430.1,
    monto_cancelacion: 374
  },
  {
    dni: "18081100",
    nombre: "ORLANDO ROJAS JUAREZ",
    deuda: 1014.79,
    origen: "BANCO FALABELLA",
    oferta: 349.6,
    monto_cancelacion: 304
  },
  {
    dni: "18830612",
    nombre: "MENDOZA ARROYO FRANCISCO",
    deuda: 14255.08,
    origen: "INTERBANK",
    oferta: 4918.55,
    monto_cancelacion: 4277
  },
  {
    dni: "21483877",
    nombre: "VENTURA ALARCON FIDEL LUIS CONSTANTI",
    deuda: 13243.77,
    origen: "BANCO FALABELLA",
    oferta: 4568.95,
    monto_cancelacion: 3973
  },
  {
    dni: "32948516",
    nombre: "EDGAR ALBERTO CORNELIO GALVEZ",
    deuda: 27917.989999999998,
    origen: "INTERBANK",
    oferta: 9631.25,
    monto_cancelacion: 8375
  },
  {
    dni: "32992695",
    nombre: "REYES RIOS JULIO AGUSTIN",
    deuda: 2393.7,
    origen: "BCP",
    oferta: 825.7,
    monto_cancelacion: 718
  },
  {
    dni: "40056100",
    nombre: "MONDRAGON MENDOZA LUZ ELENA",
    deuda: 9367.99,
    origen: "RIPLEY",
    oferta: 3231.5,
    monto_cancelacion: 2810
  },
  {
    dni: "40204366",
    nombre: "VASQUEZ CARRANZA EDILBERTO",
    deuda: 6430.23,
    origen: "BANCO FALABELLA",
    oferta: 2218.35,
    monto_cancelacion: 1929
  },
  {
    dni: "40835461",
    nombre: "DENNIS ERNESTO VERA CANGRE",
    deuda: 1261.0,
    origen: "BANCO FALABELLA",
    oferta: 434.7,
    monto_cancelacion: 378
  },
  {
    dni: "41179310",
    nombre: "KARINA EVELIN ZAPATA SILVA",
    deuda: 1104.56,
    origen: "INTERBANK",
    oferta: 380.65,
    monto_cancelacion: 331
  },
  {
    dni: "41296261",
    nombre: "PAUCAR PRADO ELADIO",
    deuda: 1769.05,
    origen: "RIPLEY",
    oferta: 610.65,
    monto_cancelacion: 531
  },
  {
    dni: "41551220",
    nombre: "CARLOS GUILLERMO GUTIERREZ ARANA",
    deuda: 31130.32,
    origen: "BANCO FALABELLA",
    oferta: 10739.85,
    monto_cancelacion: 9339
  },
  {
    dni: "41858733",
    nombre: "MANRIQUE MENDOZA DANIEL ANTONIO",
    deuda: 1505.07,
    origen: "RIPLEY",
    oferta: 519.8,
    monto_cancelacion: 452
  },
  {
    dni: "41920140",
    nombre: "DARDA ELIANA GALLO LOZANO",
    deuda: 4321.83,
    origen: "BANCO FALABELLA",
    oferta: 1491.55,
    monto_cancelacion: 1297
  },
  {
    dni: "41924747",
    nombre: "HENRY JOAN LOPEZ DE LA CRUZ",
    deuda: 2000.87,
    origen: "BANCO FALABELLA",
    oferta: 690.0,
    monto_cancelacion: 600
  },
  {
    dni: "41932919",
    nombre: "DENISSE EVELIN CARRION DEZA",
    deuda: 3224.35,
    origen: "CAJA NUESTRA GENTE",
    oferta: 1112.05,
    monto_cancelacion: 967
  },
  {
    dni: "41945789",
    nombre: "VANESSA MILAGROS MILAGROS CUNEO PADILLA",
    deuda: 9972.11,
    origen: "BANCO FALABELLA",
    oferta: 3440.8,
    monto_cancelacion: 2992
  },
  {
    dni: "42318203",
    nombre: "LILIANA ELIZABETH LEYVA JIMENEZ",
    deuda: 9433.99,
    origen: "BANCO FALABELLA",
    oferta: 3254.5,
    monto_cancelacion: 2830
  },
  {
    dni: "42324476",
    nombre: "JUAN CARLOS PORRAS HERRERA",
    deuda: 34413.04,
    origen: "BANCO FALABELLA",
    oferta: 11872.6,
    monto_cancelacion: 10324
  },
  {
    dni: "42734239",
    nombre: "GUZMAN MENDOZA CHRISTIAN GABRIEL",
    deuda: 3049.4700000000003,
    origen: "MIBANCO",
    oferta: 1052.25,
    monto_cancelacion: 915
  },
  {
    dni: "42748231",
    nombre: "SALDAÑA BOCANEGRA ROCIO MILER",
    deuda: 5788.6900000000005,
    origen: "BANCO FALABELLA",
    oferta: 1997.55,
    monto_cancelacion: 1737
  },
  {
    dni: "42968681",
    nombre: "RONALD ELERA CONTRERAS",
    deuda: 1323.35,
    origen: "BANCO FALABELLA",
    oferta: 456.55,
    monto_cancelacion: 397
  },
  {
    dni: "42970334",
    nombre: "LUIS ARTURO HERNANDEZ UCHUYA",
    deuda: 2600.31,
    origen: "BANCO FALABELLA",
    oferta: 897.0,
    monto_cancelacion: 780
  },
  {
    dni: "43175708",
    nombre: "SANDRO ALVINES JARA",
    deuda: 6233.55,
    origen: "BANCO FALABELLA",
    oferta: 2150.5,
    monto_cancelacion: 1870
  },
  {
    dni: "43408417",
    nombre: "RICARDO HERNAN VILLARREAL VARGAS",
    deuda: 9404.81,
    origen: "BANCO FALABELLA",
    oferta: 3244.15,
    monto_cancelacion: 2821
  },
  {
    dni: "43589175",
    nombre: "ERIKA PATRICIA ASCENCIO AZABACHE",
    deuda: 1664.13,
    origen: "BANCO FALABELLA",
    oferta: 573.85,
    monto_cancelacion: 499
  },
  {
    dni: "43874698",
    nombre: "PENA�A ROSILLO OSWALDO FRANIO",
    deuda: 4516.23,
    origen: "BBVA",
    oferta: 1558.25,
    monto_cancelacion: 1355
  },
  {
    dni: "44101378",
    nombre: "JHONATAN RICAPA OSORIO",
    deuda: 1086.76,
    origen: "BANCO FALABELLA",
    oferta: 374.9,
    monto_cancelacion: 326
  },
  {
    dni: "44259598",
    nombre: "JOSE EDUARDO FIESTAS CHEVEZ",
    deuda: 1504.72,
    origen: "BANCO FALABELLA",
    oferta: 518.65,
    monto_cancelacion: 451
  },
  {
    dni: "44528240",
    nombre: "SIGUAS RAMIREZ JUNIOR JOSUE",
    deuda: 2972.98,
    origen: "BANCO FALABELLA",
    oferta: 1025.8,
    monto_cancelacion: 892
  },
  {
    dni: "44701617",
    nombre: "PELAYO CHAMIK ATUYAP",
    deuda: 1541.86,
    origen: "BANCO FALABELLA",
    oferta: 532.45,
    monto_cancelacion: 463
  },
  {
    dni: "44768826",
    nombre: "FRANCIS GUILLERMO MOREYRA JULCA",
    deuda: 4769.21,
    origen: "INTERBANK",
    oferta: 1645.65,
    monto_cancelacion: 1431
  },
  {
    dni: "44858005",
    nombre: "CASTILLO RODRIGUEZ CRISTINA ANDREA",
    deuda: 3419.7,
    origen: "BANCO FALABELLA",
    oferta: 1179.9,
    monto_cancelacion: 1026
  },
  {
    dni: "44899818",
    nombre: "JESUS JHOVANE LEIVA BERROCAL",
    deuda: 18932.63,
    origen: "BANCO FALABELLA",
    oferta: 6532.0,
    monto_cancelacion: 5680
  },
  {
    dni: "45006710",
    nombre: "IVAN ARMANDO VIERA PULACHE",
    deuda: 6630.19,
    origen: "BANCO FALABELLA",
    oferta: 2287.35,
    monto_cancelacion: 1989
  },
  {
    dni: "45124193",
    nombre: "ELMER JONATHAN MILLA CRUZ",
    deuda: 1265.15,
    origen: "BANCO FALABELLA",
    oferta: 437.0,
    monto_cancelacion: 380
  },
  {
    dni: "45248327",
    nombre: "JOSE RAFAEL TEMOCHE NIMA",
    deuda: 9381.05,
    origen: "BANCO FALABELLA",
    oferta: 3236.1,
    monto_cancelacion: 2814
  },
  {
    dni: "45305175",
    nombre: "MARIA ROSELI ANCAJIMA VALVERDE",
    deuda: 11275.05,
    origen: "BANCO FALABELLA",
    oferta: 3890.45,
    monto_cancelacion: 3383
  },
  {
    dni: "45409768",
    nombre: "CASTRO ATOCHE JESUS MOISES",
    deuda: 4342.42,
    origen: "BCP",
    oferta: 1498.45,
    monto_cancelacion: 1303
  },
  {
    dni: "45425321",
    nombre: "EDISON ALEXANDER TAMBINE QUISPE",
    deuda: 1690.82,
    origen: "BANCO FALABELLA",
    oferta: 583.05,
    monto_cancelacion: 507
  },
  {
    dni: "46074115",
    nombre: "LADY KATHERINE ALVARADO VASQUEZ",
    deuda: 1019.2,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "46076919",
    nombre: "CASTILLO MANRIQUE SHEYLA",
    deuda: 1013.34,
    origen: "BANCO FALABELLA",
    oferta: 349.6,
    monto_cancelacion: 304
  },
  {
    dni: "46097228",
    nombre: "SANCHEZ RIOS ELIAS JESUS",
    deuda: 1542.32,
    origen: "BANCO FALABELLA",
    oferta: 532.45,
    monto_cancelacion: 463
  },
  {
    dni: "46118038",
    nombre: "LIGIA ANDREA GARCIA VICENTE",
    deuda: 9671.18,
    origen: "BANCO FALABELLA",
    oferta: 3336.15,
    monto_cancelacion: 2901
  },
  {
    dni: "46231736",
    nombre: "DAVILA BORJA WILDER",
    deuda: 22553.56,
    origen: "INTERBANK",
    oferta: 7780.9,
    monto_cancelacion: 6766
  },
  {
    dni: "46291588",
    nombre: "SEJEKAM YAGKUAG EDITH VERONICA",
    deuda: 1015.67,
    origen: "BANCO FALABELLA",
    oferta: 350.75,
    monto_cancelacion: 305
  },
  {
    dni: "46434089",
    nombre: "DELIA TUNQUE INGUILTUPA",
    deuda: 1330.74,
    origen: "INTERBANK",
    oferta: 458.85,
    monto_cancelacion: 399
  },
  {
    dni: "46749270",
    nombre: "ISAUL MEGO DIAZ",
    deuda: 4328.5,
    origen: "BANCO FALABELLA",
    oferta: 1493.85,
    monto_cancelacion: 1299
  },
  {
    dni: "47001951",
    nombre: "CESAR JIMMY VELASQUEZ PINCHI",
    deuda: 1487.16,
    origen: "BANCO FALABELLA",
    oferta: 512.9,
    monto_cancelacion: 446
  },
  {
    dni: "71346424",
    nombre: "DUSTING VILLALOBOS FASANANDO",
    deuda: 3121.71,
    origen: "BANCO FALABELLA",
    oferta: 1077.55,
    monto_cancelacion: 937
  },
  {
    dni: "72937428",
    nombre: "JEAN CARLOS ROBLEDO DUHARTE",
    deuda: 1435.22,
    origen: "BANCO FALABELLA",
    oferta: 495.65,
    monto_cancelacion: 431
  },
  {
    dni: "80567895",
    nombre: "PAUL LAVALLE LAZO",
    deuda: 2302.03,
    origen: "BANCO FALABELLA",
    oferta: 794.65,
    monto_cancelacion: 691
  },
  {
    dni: "102932",
    nombre: "CENEPO GUERRA JOSNE",
    deuda: 3846.26,
    origen: "RIPLEY",
    oferta: 1327.1,
    monto_cancelacion: 1154
  },
  {
    dni: "374231",
    nombre: "ZAPATA ALEJOS NICANOR BIENVENIDO",
    deuda: 1077.73,
    origen: "BANCO FALABELLA",
    oferta: 371.45,
    monto_cancelacion: 323
  },
  {
    dni: "906041",
    nombre: "EDUARDO LOZANO SANCHEZ",
    deuda: 4127.08,
    origen: "BANCO FALABELLA",
    oferta: 1423.7,
    monto_cancelacion: 1238
  },
  {
    dni: "1134996",
    nombre: "BETTY SUSANA SANCHEZ CARLOS",
    deuda: 10261.93,
    origen: "BANCO FALABELLA",
    oferta: 3540.85,
    monto_cancelacion: 3079
  },
  {
    dni: "1146448",
    nombre: "LUCIOLA SABOYA SHAPIAMA",
    deuda: 4043.11,
    origen: "BANCO FALABELLA",
    oferta: 1394.95,
    monto_cancelacion: 1213
  },
  {
    dni: "1161417",
    nombre: "MARIQUITA AMASIFUEN TAPULLIMA",
    deuda: 1355.83,
    origen: "BANCO FALABELLA",
    oferta: 468.05,
    monto_cancelacion: 407
  },
  {
    dni: "1310620",
    nombre: "LOZA ALCALDE MARCO ANTONIO",
    deuda: 28675.83,
    origen: "INTERBANK",
    oferta: 9893.45,
    monto_cancelacion: 8603
  },
  {
    dni: "2627721",
    nombre: "ROJAS VALDIVIEZO DE LEON JEANNETHE JULIA",
    deuda: 22242.63,
    origen: "INTERBANK",
    oferta: 7673.95,
    monto_cancelacion: 6673
  },
  {
    dni: "2783720",
    nombre: "COSME BURGOS SALES",
    deuda: 5063.57,
    origen: "INTERBANK",
    oferta: 1746.85,
    monto_cancelacion: 1519
  },
  {
    dni: "2822731",
    nombre: "NIEVES VILELA JUAN CARLOS",
    deuda: 14484.83,
    origen: "RIPLEY",
    oferta: 4996.75,
    monto_cancelacion: 4345
  },
  {
    dni: "2829199",
    nombre: "PILI YOVERA PASAPERA",
    deuda: 5704.17,
    origen: "BANCO FALABELLA",
    oferta: 1967.65,
    monto_cancelacion: 1711
  },
  {
    dni: "2830555",
    nombre: "JULIO CESAR ZEVALLOS SABA",
    deuda: 2262.53,
    origen: "BANCO FALABELLA",
    oferta: 780.85,
    monto_cancelacion: 679
  },
  {
    dni: "2839541",
    nombre: "ARMESTAR PRIETO DANY JAVIER",
    deuda: 5354.07,
    origen: "RIPLEY",
    oferta: 1846.9,
    monto_cancelacion: 1606
  },
  {
    dni: "2852965",
    nombre: "MARIA AUDELIA SEMINARIO LOPEZ",
    deuda: 1154.61,
    origen: "BANCO FALABELLA",
    oferta: 397.9,
    monto_cancelacion: 346
  },
  {
    dni: "2853485",
    nombre: "TOMAS CHUNGA SILVA",
    deuda: 4572.37,
    origen: "BANCO FALABELLA",
    oferta: 1577.8,
    monto_cancelacion: 1372
  },
  {
    dni: "2867031",
    nombre: "ELSA AMPARO CARRASCO HERRERA",
    deuda: 40630.83,
    origen: "INTERBANK",
    oferta: 14017.35,
    monto_cancelacion: 12189
  },
  {
    dni: "2874802",
    nombre: "MARIANO IVAN RUIZ FERNANDEZ",
    deuda: 15158.86,
    origen: "BANCO FALABELLA",
    oferta: 5230.2,
    monto_cancelacion: 4548
  },
  {
    dni: "2898837",
    nombre: "RODYN CORDOVA ZETA",
    deuda: 4112.5,
    origen: "BANCO FALABELLA",
    oferta: 1419.1,
    monto_cancelacion: 1234
  },
  {
    dni: "3238732",
    nombre: "PERFECTO FACUNDO GUERRERO",
    deuda: 36489.16,
    origen: "INTERBANK",
    oferta: 12589.05,
    monto_cancelacion: 10947
  },
  {
    dni: "3507320",
    nombre: "MORALES SOJO RONY ERNESTO",
    deuda: 30000.74,
    origen: "INTERBANK",
    oferta: 10350.0,
    monto_cancelacion: 9000
  },
  {
    dni: "3656093",
    nombre: "LA MADRID CORNEJO MARIA CONSUELO",
    deuda: 4063.5200000000004,
    origen: "BANCO FALABELLA",
    oferta: 1401.85,
    monto_cancelacion: 1219
  },
  {
    dni: "3669481",
    nombre: "WILFREDO ESPINOZA PULACHE",
    deuda: 14367.52,
    origen: "BANCO FALABELLA",
    oferta: 4956.5,
    monto_cancelacion: 4310
  },
  {
    dni: "3685834",
    nombre: "LUIS ISAIAS AGUILAR AGUILAR",
    deuda: 2451.1,
    origen: "BANCO FALABELLA",
    oferta: 845.25,
    monto_cancelacion: 735
  },
  {
    dni: "3695176",
    nombre: "PERCY JESUS FARFAN JIMENEZ",
    deuda: 6118.37,
    origen: "BANCO FALABELLA",
    oferta: 2111.4,
    monto_cancelacion: 1836
  },
  {
    dni: "3883941",
    nombre: "FRANCISCO TAVARA GONZALES",
    deuda: 1258.77,
    origen: "BANCO FALABELLA",
    oferta: 434.7,
    monto_cancelacion: 378
  },
  {
    dni: "5642359",
    nombre: "SALAS RAMIREZ FRANCISQUIN",
    deuda: 11042.04,
    origen: "RIPLEY",
    oferta: 3809.95,
    monto_cancelacion: 3313
  },
  {
    dni: "6547231",
    nombre: "DE MENDO LUZ RAQUEL BRINGAS RODRIGUEZ",
    deuda: 3124.59,
    origen: "BANCO FALABELLA",
    oferta: 1077.55,
    monto_cancelacion: 937
  },
  {
    dni: "6665525",
    nombre: "CARLOS MARTIN LORA ESPINO",
    deuda: 50809.36,
    origen: "BANCO FALABELLA",
    oferta: 17529.45,
    monto_cancelacion: 15243
  },
  {
    dni: "6673162",
    nombre: "ROSA LUZ LOPEZ MORREL",
    deuda: 5868.65,
    origen: "BANCO FALABELLA",
    oferta: 2025.15,
    monto_cancelacion: 1761
  },
  {
    dni: "6805794",
    nombre: "YECKLE CASTRO HARRY DANIEL",
    deuda: 9329.26,
    origen: "BCP",
    oferta: 3218.85,
    monto_cancelacion: 2799
  },
  {
    dni: "6816539",
    nombre: "ROBERTO CARLOS CAZENEUVE GONZALES",
    deuda: 1537.72,
    origen: "BANCO FALABELLA",
    oferta: 530.15,
    monto_cancelacion: 461
  },
  {
    dni: "6851248",
    nombre: "JUAN CARLOS GUTIERREZ CHACON",
    deuda: 20823.89,
    origen: "BANCO FALABELLA",
    oferta: 7184.05,
    monto_cancelacion: 6247
  },
  {
    dni: "6946963",
    nombre: "ANA MARIA OSORIO HIDALGO",
    deuda: 3146.75,
    origen: "BCP",
    oferta: 1085.6,
    monto_cancelacion: 944
  },
  {
    dni: "6976943",
    nombre: "SIFUENTES CARRION CARMEN LUZ",
    deuda: 3275.37,
    origen: "RIPLEY",
    oferta: 1130.45,
    monto_cancelacion: 983
  },
  {
    dni: "7183417",
    nombre: "JUSTINO SERRANO SAAVEDRA",
    deuda: 10454.75,
    origen: "BANCO FALABELLA",
    oferta: 3606.4,
    monto_cancelacion: 3136
  },
  {
    dni: "7239783",
    nombre: "LUIS ARTEMIO LINARES GALVEZ",
    deuda: 23876.26,
    origen: "BANCO FALABELLA",
    oferta: 8237.45,
    monto_cancelacion: 7163
  },
  {
    dni: "7454442",
    nombre: "ROSARIO CASTILLO REMUZGO",
    deuda: 18402.86,
    origen: "BANCO FALABELLA",
    oferta: 6349.15,
    monto_cancelacion: 5521
  },
  {
    dni: "7500816",
    nombre: "BASTIDAS VASQUEZ MARCO ANTONIO",
    deuda: 16459.6,
    origen: "INTERBANK",
    oferta: 5678.7,
    monto_cancelacion: 4938
  },
  {
    dni: "7512799",
    nombre: "JHONNY DIAZ POVIS",
    deuda: 24260.13,
    origen: "BANCO FALABELLA",
    oferta: 8369.7,
    monto_cancelacion: 7278
  },
  {
    dni: "7514364",
    nombre: "JULIO CESAR LOPEZ JARA",
    deuda: 1922.66,
    origen: "BANCO FALABELLA",
    oferta: 663.55,
    monto_cancelacion: 577
  },
  {
    dni: "7520216",
    nombre: "JAVIER PEDRO ESTEBAN AUCAHUAQUI",
    deuda: 17124.21,
    origen: "BANCO FALABELLA",
    oferta: 5907.55,
    monto_cancelacion: 5137
  },
  {
    dni: "7526088",
    nombre: "CARLOS JOEL EGUSQUIZA OQUENDO",
    deuda: 6765.03,
    origen: "BANCO FALABELLA",
    oferta: 2334.5,
    monto_cancelacion: 2030
  },
  {
    dni: "7570420",
    nombre: "ROBERTO JUAN NUÐEZ DE LA TORRE",
    deuda: 1231.17,
    origen: "BANCO FALABELLA",
    oferta: 424.35,
    monto_cancelacion: 369
  },
  {
    dni: "7675499",
    nombre: "CARLOS NICOMEDES ARTEAGA ARELLANO",
    deuda: 2905.47,
    origen: "BANCO FALABELLA",
    oferta: 1002.8,
    monto_cancelacion: 872
  },
  {
    dni: "7863597",
    nombre: "JAVIER LIZANDRO CAIPO GIL",
    deuda: 50730.41346,
    origen: "BCP",
    oferta: 17501.85,
    monto_cancelacion: 15219
  },
  {
    dni: "7924970",
    nombre: "GRIMALDO CABRERA NANCY ROSARIO",
    deuda: 8835.38,
    origen: "RIPLEY",
    oferta: 3048.65,
    monto_cancelacion: 2651
  },
  {
    dni: "7925735",
    nombre: "MARITZA MOQUILLAZA ORELLANA",
    deuda: 11184.9,
    origen: "BANCO FALABELLA",
    oferta: 3858.25,
    monto_cancelacion: 3355
  },
  {
    dni: "7976100",
    nombre: "PEDRO INZUA MABAMA",
    deuda: 36834.06,
    origen: "BANCO FALABELLA",
    oferta: 12707.5,
    monto_cancelacion: 11050
  },
  {
    dni: "8033077",
    nombre: "JUAN AMANCIO PRIMO",
    deuda: 2405.57,
    origen: "RIPLEY",
    oferta: 830.3,
    monto_cancelacion: 722
  },
  {
    dni: "8323204",
    nombre: "GLADYS MARIA RUIZ COLORADO",
    deuda: 1956.1000000000001,
    origen: "BCP",
    oferta: 675.05,
    monto_cancelacion: 587
  },
  {
    dni: "8382679",
    nombre: "FRANCISCO ATILIO VILLAFUERTE PINTO",
    deuda: 19518.92,
    origen: "BANCO FALABELLA",
    oferta: 6734.4,
    monto_cancelacion: 5856
  },
  {
    dni: "8534275",
    nombre: "VICTOR ANDRES MUÐOZ VIVANCO",
    deuda: 2537.52,
    origen: "BANCO FALABELLA",
    oferta: 875.15,
    monto_cancelacion: 761
  },
  {
    dni: "8560568",
    nombre: "DENNIS OMAR GARCIA CANO",
    deuda: 4868.24,
    origen: "BANCO FALABELLA",
    oferta: 1679.0,
    monto_cancelacion: 1460
  },
  {
    dni: "8593799",
    nombre: "PEDRO MALAQUIAS LOVETT HOYOS",
    deuda: 3401.9,
    origen: "RIPLEY",
    oferta: 1174.15,
    monto_cancelacion: 1021
  },
  {
    dni: "8596390",
    nombre: "ELIAS BARCO MARCO ANTONIO",
    deuda: 6687.35,
    origen: "RIPLEY",
    oferta: 2306.9,
    monto_cancelacion: 2006
  },
  {
    dni: "8624638",
    nombre: "APARICIO BEDOYA PILAR",
    deuda: 73970.62,
    origen: "BCP",
    oferta: 25519.65,
    monto_cancelacion: 22191
  },
  {
    dni: "8684674",
    nombre: "CARRANZA ORTIZ PABLO CESAR",
    deuda: 12104.71,
    origen: "BCP",
    oferta: 4175.65,
    monto_cancelacion: 3631
  },
  {
    dni: "8751502",
    nombre: "YORK OSCAR VARGAS CALDERON",
    deuda: 6103.81,
    origen: "BANCO FALABELLA",
    oferta: 2105.65,
    monto_cancelacion: 1831
  },
  {
    dni: "8825215",
    nombre: "CESAR ANDRES OLIVA ESTICA",
    deuda: 7174.75,
    origen: "BANCO FALABELLA",
    oferta: 2474.8,
    monto_cancelacion: 2152
  },
  {
    dni: "8863944",
    nombre: "JOSE GABRIEL DURAND CARRION",
    deuda: 2893.56,
    origen: "BANCO FALABELLA",
    oferta: 998.2,
    monto_cancelacion: 868
  },
  {
    dni: "8934564",
    nombre: "RONCAL CABANILLAS MANUEL",
    deuda: 22327.37,
    origen: "BCP",
    oferta: 7702.7,
    monto_cancelacion: 6698
  },
  {
    dni: "9015920",
    nombre: "DANIEL MARTIN PASACHE FERNANDEZ",
    deuda: 6420.37,
    origen: "BANCO FALABELLA",
    oferta: 2214.9,
    monto_cancelacion: 1926
  },
  {
    dni: "9158191",
    nombre: "YARMAS AGUILA MARIELLA JANNETTE",
    deuda: 2624.3500000000004,
    origen: "RIPLEY",
    oferta: 905.05,
    monto_cancelacion: 787
  },
  {
    dni: "9160494",
    nombre: "ANA LUCIA ROJAS MONTERO",
    deuda: 4508.67,
    origen: "BANCO FALABELLA",
    oferta: 1555.95,
    monto_cancelacion: 1353
  },
  {
    dni: "9225711",
    nombre: "TAFUR ARONE MARY SABINA",
    deuda: 10019.24,
    origen: "INTERBANK",
    oferta: 3456.9,
    monto_cancelacion: 3006
  },
  {
    dni: "9263327",
    nombre: "GUTIERREZ AGUILAR EDMUNDA ROSA",
    deuda: 49028.07,
    origen: "MIBANCO",
    oferta: 16914.2,
    monto_cancelacion: 14708
  },
  {
    dni: "9361963",
    nombre: "YATACO YATACO MARTHA OLINDA",
    deuda: 5073.719999999999,
    origen: "RIPLEY",
    oferta: 1750.3,
    monto_cancelacion: 1522
  },
  {
    dni: "9363551",
    nombre: "LUIS ANIBAL AGUILAR CAMPOS",
    deuda: 1252.11,
    origen: "BANCO FALABELLA",
    oferta: 432.4,
    monto_cancelacion: 376
  },
  {
    dni: "9449008",
    nombre: "MATILDE CECILIA CHIRINOS CACERES",
    deuda: 6184.75,
    origen: "BANCO FALABELLA",
    oferta: 2133.25,
    monto_cancelacion: 1855
  },
  {
    dni: "9475108",
    nombre: "GUEVARA RAMOS JORGE ANTONIO",
    deuda: 16192.93,
    origen: "INTERBANK",
    oferta: 5586.7,
    monto_cancelacion: 4858
  },
  {
    dni: "9491492",
    nombre: "ELMAR EDER CRUZ TAIÐA",
    deuda: 5603.23,
    origen: "BANCO FALABELLA",
    oferta: 1933.15,
    monto_cancelacion: 1681
  },
  {
    dni: "9511030",
    nombre: "WILMER JUAN MORALES SANCHEZ",
    deuda: 1375.91,
    origen: "BANCO FALABELLA",
    oferta: 474.95,
    monto_cancelacion: 413
  },
  {
    dni: "9512023",
    nombre: "GLORIA LUCY ARIAS CILARAYAN",
    deuda: 1530.77,
    origen: "BANCO FALABELLA",
    oferta: 527.85,
    monto_cancelacion: 459
  },
  {
    dni: "9526504",
    nombre: "SAAVEDRA CRUZ SEGUNDO MAURO",
    deuda: 13676.64,
    origen: "INTERBANK",
    oferta: 4718.45,
    monto_cancelacion: 4103
  },
  {
    dni: "9571239",
    nombre: "PEDRO WILFREDO PORTELLA MORVELI",
    deuda: 11748.83,
    origen: "BANCO FALABELLA",
    oferta: 4053.75,
    monto_cancelacion: 3525
  },
  {
    dni: "9608305",
    nombre: "ROQUE BARROSO NELLY MARISOL",
    deuda: 20765.85,
    origen: "BANCO FALABELLA",
    oferta: 7164.5,
    monto_cancelacion: 6230
  },
  {
    dni: "9629300",
    nombre: "MIGUEL ANGEL CARLOS MARQUEZ",
    deuda: 22457.95,
    origen: "BANCO FALABELLA",
    oferta: 7747.55,
    monto_cancelacion: 6737
  },
  {
    dni: "9688841",
    nombre: "SANDOVAL CUYUTUPA RUBEN ROCINE",
    deuda: 1275.02,
    origen: "BANCO FALABELLA",
    oferta: 440.45,
    monto_cancelacion: 383
  },
  {
    dni: "9689675",
    nombre: "MONTALVO SANCHEZ JOHN CARLOS",
    deuda: 3885.9,
    origen: "RIPLEY",
    oferta: 1340.9,
    monto_cancelacion: 1166
  },
  {
    dni: "9717174",
    nombre: "EUSEBIO VICTOR GAMERO HUARCAYA",
    deuda: 1359.44,
    origen: "BANCO FALABELLA",
    oferta: 469.2,
    monto_cancelacion: 408
  },
  {
    dni: "9722322",
    nombre: "CUCHO GALLARDO MARCO ANTONIO",
    deuda: 71973.63,
    origen: "INTERBANK",
    oferta: 24830.8,
    monto_cancelacion: 21592
  },
  {
    dni: "9754521",
    nombre: "FELIX CLAUDIO MENDOZA MARTINEZ",
    deuda: 1119.69,
    origen: "BANCO FALABELLA",
    oferta: 386.4,
    monto_cancelacion: 336
  },
  {
    dni: "9782327",
    nombre: "MARCO ANTONIO RENDON CONDORI",
    deuda: 4312.79,
    origen: "BANCO FALABELLA",
    oferta: 1488.1,
    monto_cancelacion: 1294
  },
  {
    dni: "9799337",
    nombre: "JOSE PABLO GARCIA LANCHIPA",
    deuda: 5426.94,
    origen: "BANCO FALABELLA",
    oferta: 1872.2,
    monto_cancelacion: 1628
  },
  {
    dni: "9840102",
    nombre: "PANDURO GUTIERREZ RUTH CLAIRE",
    deuda: 2565.1800000000003,
    origen: "RIPLEY",
    oferta: 885.5,
    monto_cancelacion: 770
  },
  {
    dni: "9845721",
    nombre: "VICTOR RAUL FRANCO SARMIENTO",
    deuda: 1906.92,
    origen: "BANCO FALABELLA",
    oferta: 657.8,
    monto_cancelacion: 572
  },
  {
    dni: "9867776",
    nombre: "FRANK CARLOS SANCHEZ CARDENAS",
    deuda: 3892.21,
    origen: "BANCO FALABELLA",
    oferta: 1343.2,
    monto_cancelacion: 1168
  },
  {
    dni: "9879276",
    nombre: "ARMANDO JAVIER MEDINA FLORES",
    deuda: 1282.34,
    origen: "BANCO FALABELLA",
    oferta: 442.75,
    monto_cancelacion: 385
  },
  {
    dni: "9883874",
    nombre: "CHAVEZ CHISCUL VICTOR ANIBAL",
    deuda: 8737.03,
    origen: "BCP",
    oferta: 3014.15,
    monto_cancelacion: 2621
  },
  {
    dni: "9885926",
    nombre: "FARFAN YARLEQUE JUAN RAFAEL",
    deuda: 23247.670000000002,
    origen: "BCP",
    oferta: 8020.1,
    monto_cancelacion: 6974
  },
  {
    dni: "9914103",
    nombre: "JOSE LUIS RAMOS HURTADO",
    deuda: 1519.72,
    origen: "BANCO FALABELLA",
    oferta: 524.4,
    monto_cancelacion: 456
  },
  {
    dni: "10005524",
    nombre: "AGUIRRE CORDOVA JOSE ESTEBAN",
    deuda: 2001.68,
    origen: "RIPLEY",
    oferta: 691.15,
    monto_cancelacion: 601
  },
  {
    dni: "10005911",
    nombre: "TITO AROSTEGUI CLEMENTE",
    deuda: 3370.86,
    origen: "BANCO FALABELLA",
    oferta: 1162.65,
    monto_cancelacion: 1011
  },
  {
    dni: "10011351",
    nombre: "MONICA FIDELIA SAMANEZ LUJAN",
    deuda: 1006.22,
    origen: "BANCO FALABELLA",
    oferta: 347.3,
    monto_cancelacion: 302
  },
  {
    dni: "10028022",
    nombre: "MALCA CHICNES GLADYS ELSA",
    deuda: 15180.02,
    origen: "RIPLEY",
    oferta: 5237.1,
    monto_cancelacion: 4554
  },
  {
    dni: "10092403",
    nombre: "IRMA GIOVANNA CORONEL SANCHEZ",
    deuda: 10435.54,
    origen: "BCP",
    oferta: 3600.65,
    monto_cancelacion: 3131
  },
  {
    dni: "10092915",
    nombre: "JULIO LUIS EDUARDO GONZALES URRELO",
    deuda: 2539.01,
    origen: "BANCO FALABELLA",
    oferta: 876.3,
    monto_cancelacion: 762
  },
  {
    dni: "10108816",
    nombre: "ZAMUDIO LUNA MADELEINE NELLY",
    deuda: 1308.35,
    origen: "RIPLEY",
    oferta: 451.95,
    monto_cancelacion: 393
  },
  {
    dni: "10112735",
    nombre: "VICTOR HUGO PADILLA ROJAS",
    deuda: 3140.94,
    origen: "BCP",
    oferta: 1083.3,
    monto_cancelacion: 942
  },
  {
    dni: "10163661",
    nombre: "RETUERTO SAAVEDRA CESAR",
    deuda: 2890.2400000000002,
    origen: "RIPLEY",
    oferta: 997.05,
    monto_cancelacion: 867
  },
  {
    dni: "10212009",
    nombre: "LUIS EFRAIN BEJAR MENDOZA",
    deuda: 8476.2,
    origen: "BANCO FALABELLA",
    oferta: 2924.45,
    monto_cancelacion: 2543
  },
  {
    dni: "10215890",
    nombre: "WILDER ABEL MUÐOZ SEMINARIO",
    deuda: 5286.12,
    origen: "BANCO FALABELLA",
    oferta: 1823.9,
    monto_cancelacion: 1586
  },
  {
    dni: "10279519",
    nombre: "ROSARIO ELIZABETH CABRERA ESPINOZA",
    deuda: 2881.22,
    origen: "BANCO FALABELLA",
    oferta: 993.6,
    monto_cancelacion: 864
  },
  {
    dni: "10288338",
    nombre: "CAROL WINSTONS REYES ZEVALLOS",
    deuda: 1224.5,
    origen: "BANCO FALABELLA",
    oferta: 422.05,
    monto_cancelacion: 367
  },
  {
    dni: "10312483",
    nombre: "OSCAR FELIPE FERNANDEZ HUAMANYAURI",
    deuda: 16248.01,
    origen: "BANCO FALABELLA",
    oferta: 5605.1,
    monto_cancelacion: 4874
  },
  {
    dni: "10349954",
    nombre: "ELMER CIRIACO VALVERDE TORRES",
    deuda: 5445.549999999999,
    origen: "RIPLEY",
    oferta: 1879.1,
    monto_cancelacion: 1634
  },
  {
    dni: "10418093",
    nombre: "PAREDES CAMACHO EMIR RAUL",
    deuda: 2824.06,
    origen: "MIBANCO",
    oferta: 974.05,
    monto_cancelacion: 847
  },
  {
    dni: "10459829",
    nombre: "TEOFILO VICENTE CORDERO PINO",
    deuda: 11286.22,
    origen: "BANCO FALABELLA",
    oferta: 3893.9,
    monto_cancelacion: 3386
  },
  {
    dni: "10514365",
    nombre: "FLORES HERRERA EDDA JANET",
    deuda: 2756.64697,
    origen: "BANCO FALABELLA",
    oferta: 951.05,
    monto_cancelacion: 827
  },
  {
    dni: "10520557",
    nombre: "ANDRES SERRANO CCOCHACHI",
    deuda: 1772.56,
    origen: "BANCO FALABELLA",
    oferta: 611.8,
    monto_cancelacion: 532
  },
  {
    dni: "10579435",
    nombre: "MILAGROS JULIA GALLARDO PADILLA",
    deuda: 3277.93,
    origen: "BANCO FALABELLA",
    oferta: 1130.45,
    monto_cancelacion: 983
  },
  {
    dni: "10612780",
    nombre: "LUZ ROCIO CALLE ARIAS",
    deuda: 63266.28,
    origen: "BANCO FALABELLA",
    oferta: 21827.0,
    monto_cancelacion: 18980
  },
  {
    dni: "10614851",
    nombre: "LARA PATIÑO EVELYN EDITH",
    deuda: 3030.33,
    origen: "RIPLEY",
    oferta: 1045.35,
    monto_cancelacion: 909
  },
  {
    dni: "10623501",
    nombre: "JOSE OSWALDO RAMOS VENTURA",
    deuda: 3198.48,
    origen: "BANCO FALABELLA",
    oferta: 1104.0,
    monto_cancelacion: 960
  },
  {
    dni: "10626775",
    nombre: "GIL ROJAS ATENCIA",
    deuda: 5406.56,
    origen: "BANCO FALABELLA",
    oferta: 1865.3,
    monto_cancelacion: 1622
  },
  {
    dni: "10629454",
    nombre: "HENRY CHAVEZ GOMEZ",
    deuda: 2149.58,
    origen: "BANCO FALABELLA",
    oferta: 741.75,
    monto_cancelacion: 645
  },
  {
    dni: "10636817",
    nombre: "HUERTAS QUISPE DIEGO OMAR",
    deuda: 19527.9,
    origen: "BANCO FALABELLA",
    oferta: 6736.7,
    monto_cancelacion: 5858
  },
  {
    dni: "10667127",
    nombre: "JOSUE ALZAMORA YUPANQUI",
    deuda: 11582.02,
    origen: "BANCO FALABELLA",
    oferta: 3996.25,
    monto_cancelacion: 3475
  },
  {
    dni: "10748255",
    nombre: "CALEB JEFFERSON VALDIVIA ESTRADA",
    deuda: 15781.509999999998,
    origen: "BCP",
    oferta: 5444.1,
    monto_cancelacion: 4734
  },
  {
    dni: "10760905",
    nombre: "MONTENEGRO ALBES JIMMY PAUL",
    deuda: 1910.67,
    origen: "BANCO FALABELLA",
    oferta: 658.95,
    monto_cancelacion: 573
  },
  {
    dni: "10798269",
    nombre: "CAROL JULIANA ITURRIA OLAZO",
    deuda: 4932.78,
    origen: "BANCO FALABELLA",
    oferta: 1702.0,
    monto_cancelacion: 1480
  },
  {
    dni: "15355317",
    nombre: "TOMASA ROSA GARCIA LUYO",
    deuda: 2293.85,
    origen: "BANCO FALABELLA",
    oferta: 791.2,
    monto_cancelacion: 688
  },
  {
    dni: "15429215",
    nombre: "LESSLIE YOHANA GOMEZ YACTAYO",
    deuda: 1290.74,
    origen: "BANCO FALABELLA",
    oferta: 445.05,
    monto_cancelacion: 387
  },
  {
    dni: "15753722",
    nombre: "RAUL ALEXANDER PASCUAL NARIO",
    deuda: 2807.31,
    origen: "BANCO FALABELLA",
    oferta: 968.3,
    monto_cancelacion: 842
  },
  {
    dni: "15753834",
    nombre: "EFRAIN MOISES RODRIGUEZ POLO",
    deuda: 1907.06,
    origen: "BCP",
    oferta: 657.8,
    monto_cancelacion: 572
  },
  {
    dni: "16420062",
    nombre: "ROMERO PEDRO JACINTO ROBLE",
    deuda: 4562.214840000001,
    origen: "BANCO FALABELLA",
    oferta: 1574.35,
    monto_cancelacion: 1369
  },
  {
    dni: "16505270",
    nombre: "CARLOS GREGORIO MECHAN PERICHE",
    deuda: 2553.99,
    origen: "RIPLEY",
    oferta: 880.9,
    monto_cancelacion: 766
  },
  {
    dni: "16617098",
    nombre: "VICTOR MANUEL CABEZAS GONZALES",
    deuda: 3759.95,
    origen: "BANCO FALABELLA",
    oferta: 1297.2,
    monto_cancelacion: 1128
  },
  {
    dni: "16672097",
    nombre: "SILVIA DEL ROSARIO CONSTANTINO GONZALES",
    deuda: 4824.78,
    origen: "BANCO FALABELLA",
    oferta: 1664.05,
    monto_cancelacion: 1447
  },
  {
    dni: "16680313",
    nombre: "CARLOS ENRIQUE GARCIA FERNANDEZ",
    deuda: 29090.17,
    origen: "BANCO FALABELLA",
    oferta: 10036.05,
    monto_cancelacion: 8727
  },
  {
    dni: "16772476",
    nombre: "ELVA TAPIA QUISPE",
    deuda: 4774.09,
    origen: "BANCO FALABELLA",
    oferta: 1646.8,
    monto_cancelacion: 1432
  },
  {
    dni: "16796120",
    nombre: "ZAIDA DORLIZA PEÑA RAMIREZ",
    deuda: 1280.06,
    origen: "BANCO FALABELLA",
    oferta: 441.6,
    monto_cancelacion: 384
  },
  {
    dni: "17872759",
    nombre: "MIGUEL ANGEL DOMINGUEZ GOMEZ",
    deuda: 9473.14,
    origen: "BANCO FALABELLA",
    oferta: 3268.3,
    monto_cancelacion: 2842
  },
  {
    dni: "17890204",
    nombre: "TEODORO PARRISH CASTRO DUAREZ",
    deuda: 26247.49,
    origen: "BANCO FALABELLA",
    oferta: 9055.1,
    monto_cancelacion: 7874
  },
  {
    dni: "17918393",
    nombre: "MARCO ANTONIO ZELADA ARCILA",
    deuda: 9461.81,
    origen: "BANCO FALABELLA",
    oferta: 3264.85,
    monto_cancelacion: 2839
  },
  {
    dni: "17922802",
    nombre: "RAMOS GUERRA FRANCIS PAUL",
    deuda: 10212.92,
    origen: "RIPLEY",
    oferta: 3523.6,
    monto_cancelacion: 3064
  },
  {
    dni: "17971850",
    nombre: "CLAUDIO MOROCHO QUISPE",
    deuda: 7261.46,
    origen: "BANCO FALABELLA",
    oferta: 2504.7,
    monto_cancelacion: 2178
  },
  {
    dni: "18058832",
    nombre: "CARLOS ARTURO PAREDES GARCIA",
    deuda: 1480.14,
    origen: "BANCO FALABELLA",
    oferta: 510.6,
    monto_cancelacion: 444
  },
  {
    dni: "18101339",
    nombre: "FLOR DE MARIA SANCHEZ TRUJILLO",
    deuda: 2671.31,
    origen: "BANCO FALABELLA",
    oferta: 921.15,
    monto_cancelacion: 801
  },
  {
    dni: "18102442",
    nombre: "MARUJA ELIZABETH CASTILLO HUANILO",
    deuda: 1564.49,
    origen: "BANCO FALABELLA",
    oferta: 539.35,
    monto_cancelacion: 469
  },
  {
    dni: "18140193",
    nombre: "MARCO ANTONIO CARDOZO ROJAS",
    deuda: 24516.86,
    origen: "BANCO FALABELLA",
    oferta: 8458.25,
    monto_cancelacion: 7355
  },
  {
    dni: "18180216",
    nombre: "HILDA ADRIANA MARTELL CASTILLO",
    deuda: 10933.64,
    origen: "BANCO FALABELLA",
    oferta: 3772.0,
    monto_cancelacion: 3280
  },
  {
    dni: "18201603",
    nombre: "SEGUNDO ALEJANDRO COTRINA CERDAN",
    deuda: 2019.7,
    origen: "BANCO FALABELLA",
    oferta: 696.9,
    monto_cancelacion: 606
  },
  {
    dni: "18864127",
    nombre: "PASCUAL GRACIANO ESCOBAR",
    deuda: 1518.86,
    origen: "BANCO FALABELLA",
    oferta: 524.4,
    monto_cancelacion: 456
  },
  {
    dni: "19328037",
    nombre: "RONALD MANUEL CRUZADO AHUMADA",
    deuda: 3016.1,
    origen: "BANCO FALABELLA",
    oferta: 1040.75,
    monto_cancelacion: 905
  },
  {
    dni: "19703077",
    nombre: "JOSE LUIS PEREZ QUISPE",
    deuda: 11915.34,
    origen: "BANCO FALABELLA",
    oferta: 4111.25,
    monto_cancelacion: 3575
  },
  {
    dni: "19870264",
    nombre: "EDWIN FRANCIS MARTINEZ ALFARO",
    deuda: 1392.84,
    origen: "BANCO FALABELLA",
    oferta: 480.7,
    monto_cancelacion: 418
  },
  {
    dni: "20016947",
    nombre: "ISAAC PEREZ ESCOBAR",
    deuda: 4319.75,
    origen: "BANCO FALABELLA",
    oferta: 1490.4,
    monto_cancelacion: 1296
  },
  {
    dni: "20073361",
    nombre: "FABIOLA ARACELY EGOAVIL ARANA",
    deuda: 1616.91,
    origen: "BANCO FALABELLA",
    oferta: 557.75,
    monto_cancelacion: 485
  },
  {
    dni: "20569523",
    nombre: "WILLY WILMAN MAURY GARMA",
    deuda: 70449.47828,
    origen: "BCP",
    oferta: 24305.25,
    monto_cancelacion: 21135
  },
  {
    dni: "21440660",
    nombre: "VALENZUELA PISCONTE JOSE LA ROSA",
    deuda: 7200.92,
    origen: "MIBANCO",
    oferta: 2484.0,
    monto_cancelacion: 2160
  },
  {
    dni: "21479832",
    nombre: "ANYOSA CAHUA MARIA CONCEPCION",
    deuda: 3171.88,
    origen: "RIPLEY",
    oferta: 1094.8,
    monto_cancelacion: 952
  },
  {
    dni: "21524418",
    nombre: "FERNANDO ROBERTO BRAVO JUSCAMAYTA",
    deuda: 11700.67,
    origen: "BANCO FALABELLA",
    oferta: 4036.5,
    monto_cancelacion: 3510
  },
  {
    dni: "21540831",
    nombre: "ALEJANDRO DIONISIO LABIOS SAYRITUPAC",
    deuda: 1087.46,
    origen: "BANCO FALABELLA",
    oferta: 374.9,
    monto_cancelacion: 326
  },
  {
    dni: "21800427",
    nombre: "DEL ROSARIO JORGES DE GUERRA GUILLERMINA",
    deuda: 5415.96,
    origen: "BANCO FALABELLA",
    oferta: 1868.75,
    monto_cancelacion: 1625
  },
  {
    dni: "21819772",
    nombre: "MELCHOR JESUS CASTILLA PACHAS",
    deuda: 15167.89,
    origen: "BANCO FALABELLA",
    oferta: 5232.5,
    monto_cancelacion: 4550
  },
  {
    dni: "21879396",
    nombre: "RAFAEL FRANCISCO DEL AGUILA BARDALES",
    deuda: 1427.29,
    origen: "BANCO FALABELLA",
    oferta: 492.2,
    monto_cancelacion: 428
  },
  {
    dni: "22521724",
    nombre: "DAVID ARNALDO TRINIDAD MUÐOZ",
    deuda: 1351.47,
    origen: "BANCO FALABELLA",
    oferta: 465.75,
    monto_cancelacion: 405
  },
  {
    dni: "23945403",
    nombre: "RICHARD CIPRIAN ALVAREZ",
    deuda: 2269.11,
    origen: "BANCO FALABELLA",
    oferta: 783.15,
    monto_cancelacion: 681
  },
  {
    dni: "23977143",
    nombre: "ROXANA SCHIAFFINO GARCIA",
    deuda: 2315.06,
    origen: "BANCO FALABELLA",
    oferta: 799.25,
    monto_cancelacion: 695
  },
  {
    dni: "25522896",
    nombre: "PRIETO LOYO MERCEDES CLOTILDE",
    deuda: 10542.050000000001,
    origen: "BCP",
    oferta: 3637.45,
    monto_cancelacion: 3163
  },
  {
    dni: "25537121",
    nombre: "OBREGON VDA.DE CAMPANA GRACIELA",
    deuda: 3259.99,
    origen: "BCP",
    oferta: 1124.7,
    monto_cancelacion: 978
  },
  {
    dni: "25560339",
    nombre: "TORRES QUISPE JOVANI JOSE",
    deuda: 1979.47,
    origen: "RIPLEY",
    oferta: 683.1,
    monto_cancelacion: 594
  },
  {
    dni: "25571993",
    nombre: "NORMA ANGELICA ISIDRO PAREDES",
    deuda: 1510.65,
    origen: "BANCO FALABELLA",
    oferta: 520.95,
    monto_cancelacion: 453
  },
  {
    dni: "25644226",
    nombre: "PABLO AUGUSTO JUAREZ PERALTA",
    deuda: 2091.28,
    origen: "BANCO FALABELLA",
    oferta: 721.05,
    monto_cancelacion: 627
  },
  {
    dni: "25669652",
    nombre: "CERON ROBLES JUDITH SOLEDAD",
    deuda: 4877.5,
    origen: "RIPLEY",
    oferta: 1682.45,
    monto_cancelacion: 1463
  },
  {
    dni: "25709930",
    nombre: "SALAZAR PEREZ HECTOR ORLANDO",
    deuda: 4740.49,
    origen: "BANCO FALABELLA",
    oferta: 1635.3,
    monto_cancelacion: 1422
  },
  {
    dni: "25711072",
    nombre: "PETER LEONEL MANCO LENA",
    deuda: 3415.89,
    origen: "BANCO FALABELLA",
    oferta: 1178.75,
    monto_cancelacion: 1025
  },
  {
    dni: "25713763",
    nombre: "MARITZA LOURDES AZABACHE HIDALGO",
    deuda: 7959.82,
    origen: "BANCO FALABELLA",
    oferta: 2746.2,
    monto_cancelacion: 2388
  },
  {
    dni: "25732139",
    nombre: "CESAR AREVALO VENTURA",
    deuda: 5709.71,
    origen: "BANCO FALABELLA",
    oferta: 1969.95,
    monto_cancelacion: 1713
  },
  {
    dni: "25738615",
    nombre: "PEDRO VENTURA RELAIZA",
    deuda: 6741.04,
    origen: "BANCO FALABELLA",
    oferta: 2325.3,
    monto_cancelacion: 2022
  },
  {
    dni: "25739728",
    nombre: "IVAN DAVID RODRIGUEZ BALDWIN",
    deuda: 1513.91,
    origen: "BANCO FALABELLA",
    oferta: 522.1,
    monto_cancelacion: 454
  },
  {
    dni: "25770550",
    nombre: "VILLA RAMIREZ MIGUEL ANGEL",
    deuda: 6920.79,
    origen: "BCP",
    oferta: 2387.4,
    monto_cancelacion: 2076
  },
  {
    dni: "25777837",
    nombre: "JHONNY SIALER LINARES",
    deuda: 22148.11,
    origen: "BANCO FALABELLA",
    oferta: 7640.6,
    monto_cancelacion: 6644
  },
  {
    dni: "25779729",
    nombre: "PEDRO POLICARPO OLIVAS ASMAT",
    deuda: 2858.2,
    origen: "BANCO FALABELLA",
    oferta: 985.55,
    monto_cancelacion: 857
  },
  {
    dni: "25838728",
    nombre: "NAHUM MANUEL GONZALES HERRERA",
    deuda: 5783.82,
    origen: "BANCO FALABELLA",
    oferta: 1995.25,
    monto_cancelacion: 1735
  },
  {
    dni: "26679201",
    nombre: "WALTER DIONICIO QUILICHE RAMIREZ",
    deuda: 1194.45,
    origen: "BANCO FALABELLA",
    oferta: 411.7,
    monto_cancelacion: 358
  },
  {
    dni: "26684478",
    nombre: "ESMELDO REYES VILLEGAS",
    deuda: 8142.37,
    origen: "BCP",
    oferta: 2809.45,
    monto_cancelacion: 2443
  },
  {
    dni: "26731745",
    nombre: "ISAIAS HUARIPATA ISPILCO",
    deuda: 1036.31,
    origen: "BANCO FALABELLA",
    oferta: 357.65,
    monto_cancelacion: 311
  },
  {
    dni: "26732514",
    nombre: "EDGAR WILSON CULQUI BRINGAS",
    deuda: 34343.84,
    origen: "CAJA TRUJILLO",
    oferta: 11848.45,
    monto_cancelacion: 10303
  },
  {
    dni: "26733497",
    nombre: "CARLOS ALBERTO HUACCHA DIAZ",
    deuda: 2597.1,
    origen: "BANCO FALABELLA",
    oferta: 895.85,
    monto_cancelacion: 779
  },
  {
    dni: "26960876",
    nombre: "SANTOS GUILLERMO CRISOLOGO ABANTO",
    deuda: 9152.44,
    origen: "BANCO FALABELLA",
    oferta: 3157.9,
    monto_cancelacion: 2746
  },
  {
    dni: "27169517",
    nombre: "PERSY ESPINOZA MOLINA",
    deuda: 4534.62,
    origen: "BANCO FALABELLA",
    oferta: 1564.0,
    monto_cancelacion: 1360
  },
  {
    dni: "27688276",
    nombre: "FLORENTINO FLORES MATOS",
    deuda: 36961.64000000001,
    origen: "INTERBANK",
    oferta: 12751.2,
    monto_cancelacion: 11088
  },
  {
    dni: "29428458",
    nombre: "PINTO SANTOS HORTENCIA TATIANA",
    deuda: 43877.55,
    origen: "INTERBANK",
    oferta: 15137.45,
    monto_cancelacion: 13163
  },
  {
    dni: "29571958",
    nombre: "ELIANA CHAVEZ FLORES",
    deuda: 1804.29,
    origen: "BANCO FALABELLA",
    oferta: 622.15,
    monto_cancelacion: 541
  },
  {
    dni: "29657721",
    nombre: "ANGEL JULIO ARRATEA DELGADO",
    deuda: 12983.61,
    origen: "BANCO FALABELLA",
    oferta: 4479.25,
    monto_cancelacion: 3895
  },
  {
    dni: "29719554",
    nombre: "KATHIANNE BETSY OROS TICONA",
    deuda: 2844.17,
    origen: "BANCO FALABELLA",
    oferta: 980.95,
    monto_cancelacion: 853
  },
  {
    dni: "30505782",
    nombre: "DEL CARPIO HUARCAYA DE SEGOVIA ROSARIO ELIZABETH",
    deuda: 25344.16,
    origen: "INTERBANK",
    oferta: 8743.45,
    monto_cancelacion: 7603
  },
  {
    dni: "30674446",
    nombre: "ABRAHAM JUAN BERRIO TOMAYLLA",
    deuda: 34153.95,
    origen: "RIPLEY",
    oferta: 11782.9,
    monto_cancelacion: 10246
  },
  {
    dni: "31676909",
    nombre: "JESSICA KARINA DOIG SANCHEZ",
    deuda: 14643.83,
    origen: "BANCO FALABELLA",
    oferta: 5051.95,
    monto_cancelacion: 4393
  },
  {
    dni: "32138161",
    nombre: "NEVADO DELGADILLO CESAR RICHARD",
    deuda: 26904.46,
    origen: "BANCO FALABELLA",
    oferta: 9281.65,
    monto_cancelacion: 8071
  },
  {
    dni: "32543379",
    nombre: "ALEXI ALAMA ALVAREZ",
    deuda: 1330.9,
    origen: "BANCO FALABELLA",
    oferta: 458.85,
    monto_cancelacion: 399
  },
  {
    dni: "32544560",
    nombre: "KULLMAR LANFOR ALVARADO GONZALES",
    deuda: 9161.41,
    origen: "BANCO FALABELLA",
    oferta: 3160.2,
    monto_cancelacion: 2748
  },
  {
    dni: "32874847",
    nombre: "CATALINO ARTEMIO CARRION VILLAFANA",
    deuda: 91414.85999999999,
    origen: "BCP",
    oferta: 31537.6,
    monto_cancelacion: 27424
  },
  {
    dni: "32924645",
    nombre: "ROCIO DEL PILAR LAUREANO MENDEZ",
    deuda: 15605.02,
    origen: "BANCO FALABELLA",
    oferta: 5384.3,
    monto_cancelacion: 4682
  },
  {
    dni: "32927684",
    nombre: "MIGUEL ANGEL CALDERON VALDIVIEZO",
    deuda: 2874.97,
    origen: "BANCO FALABELLA",
    oferta: 991.3,
    monto_cancelacion: 862
  },
  {
    dni: "32936087",
    nombre: "ASUNCION MARITZA GONZALES ECHEVARRIA",
    deuda: 2268.86,
    origen: "BANCO FALABELLA",
    oferta: 783.15,
    monto_cancelacion: 681
  },
  {
    dni: "32962195",
    nombre: "ALEXANDER POOL MENDOZA SOLARI",
    deuda: 1716.32,
    origen: "BANCO FALABELLA",
    oferta: 592.25,
    monto_cancelacion: 515
  },
  {
    dni: "32971940",
    nombre: "SIMON MATOS MILAGROS DEL PILAR",
    deuda: 5162.51,
    origen: "BCP",
    oferta: 1781.35,
    monto_cancelacion: 1549
  },
  {
    dni: "40102869",
    nombre: "MAYHUIRE PIZARRO MILTON CESAR",
    deuda: 21590.49,
    origen: "BANCO FALABELLA",
    oferta: 7448.55,
    monto_cancelacion: 6477
  },
  {
    dni: "40113857",
    nombre: "MUNOZ LI EDUARDO MANUEL",
    deuda: 27616.780000000002,
    origen: "BCP",
    oferta: 9527.75,
    monto_cancelacion: 8285
  },
  {
    dni: "40119580",
    nombre: "JAIME WILLIAM RAMIREZ PUENTE",
    deuda: 1220.94,
    origen: "BANCO FALABELLA",
    oferta: 420.9,
    monto_cancelacion: 366
  },
  {
    dni: "40184671",
    nombre: "ROSAELVINA MARTINEZ CHAVEZ",
    deuda: 6030.77,
    origen: "BANCO FALABELLA",
    oferta: 2080.35,
    monto_cancelacion: 1809
  },
  {
    dni: "40184948",
    nombre: "GLADYS MAGALI SOTELO LA ROSA",
    deuda: 7989.43,
    origen: "BANCO FALABELLA",
    oferta: 2756.55,
    monto_cancelacion: 2397
  },
  {
    dni: "40230738",
    nombre: "VILMA CYNTHIA MINAYA ATAO",
    deuda: 4286.08,
    origen: "BANCO FALABELLA",
    oferta: 1478.9,
    monto_cancelacion: 1286
  },
  {
    dni: "40240292",
    nombre: "DALIA MAGDALENA CASTRO GASPAR",
    deuda: 2993.52,
    origen: "BANCO FALABELLA",
    oferta: 1032.7,
    monto_cancelacion: 898
  },
  {
    dni: "40240578",
    nombre: "EDUARDO DIAPIS CERVANTES",
    deuda: 4115.22,
    origen: "BANCO FALABELLA",
    oferta: 1420.25,
    monto_cancelacion: 1235
  },
  {
    dni: "40289719",
    nombre: "JUAN FRANCISCO RIVERA MORALES",
    deuda: 12336.52,
    origen: "BANCO FALABELLA",
    oferta: 4256.15,
    monto_cancelacion: 3701
  },
  {
    dni: "40324309",
    nombre: "BUSTAMANTE RICHARDSON SARA MERCEDES",
    deuda: 18735.06,
    origen: "BANCO FALABELLA",
    oferta: 6464.15,
    monto_cancelacion: 5621
  },
  {
    dni: "40377752",
    nombre: "IVAN LUIS CASTILLO PAZ",
    deuda: 1506.17,
    origen: "BANCO FALABELLA",
    oferta: 519.8,
    monto_cancelacion: 452
  },
  {
    dni: "40403290",
    nombre: "ARLAN VASQUEZ OCHOA",
    deuda: 21054.96,
    origen: "INTERBANK",
    oferta: 7263.4,
    monto_cancelacion: 6316
  },
  {
    dni: "40421022",
    nombre: "TERESA JUTBHEL FERNANDEZ DIAZ",
    deuda: 15097.8,
    origen: "BANCO FALABELLA",
    oferta: 5208.35,
    monto_cancelacion: 4529
  },
  {
    dni: "40481478",
    nombre: "JULIE ALICE TORRES KAGUE",
    deuda: 21321.44,
    origen: "INTERBANK",
    oferta: 7355.4,
    monto_cancelacion: 6396
  },
  {
    dni: "40529848",
    nombre: "HINOSTROZA FLORES MAGALI ROCIO",
    deuda: 3865.17,
    origen: "BANCO FALABELLA",
    oferta: 1334.0,
    monto_cancelacion: 1160
  },
  {
    dni: "40537467",
    nombre: "CRISTINA PATRICIA IBAÐEZ FARFAN",
    deuda: 15193.36,
    origen: "BANCO FALABELLA",
    oferta: 5241.7,
    monto_cancelacion: 4558
  },
  {
    dni: "40579106",
    nombre: "GLADYS YESENIA CRUZ ELIZALDE",
    deuda: 2389.47,
    origen: "BANCO FALABELLA",
    oferta: 824.55,
    monto_cancelacion: 717
  },
  {
    dni: "40600270",
    nombre: "CRUZ GALLO GUISELA YANIRA",
    deuda: 5385.6,
    origen: "BANCO FALABELLA",
    oferta: 1858.4,
    monto_cancelacion: 1616
  },
  {
    dni: "40600287",
    nombre: "ALEXANDER IVAN SILVA COSTA",
    deuda: 6933.69,
    origen: "BANCO FALABELLA",
    oferta: 2392.0,
    monto_cancelacion: 2080
  },
  {
    dni: "40618955",
    nombre: "JANET ELIZABETH TRELLES TRELLES",
    deuda: 1880.81,
    origen: "BANCO FALABELLA",
    oferta: 648.6,
    monto_cancelacion: 564
  },
  {
    dni: "40646913",
    nombre: "JOSIAS REMIGIO SAENZ VELA",
    deuda: 1377.38,
    origen: "BANCO FALABELLA",
    oferta: 474.95,
    monto_cancelacion: 413
  },
  {
    dni: "40652367",
    nombre: "TORRES ANCAJIMA ROSA MIRIAN",
    deuda: 2657.7,
    origen: "RIPLEY",
    oferta: 916.55,
    monto_cancelacion: 797
  },
  {
    dni: "40718036",
    nombre: "JORGE LUIS NIMA HAMANN",
    deuda: 9803.23,
    origen: "BANCO FALABELLA",
    oferta: 3382.15,
    monto_cancelacion: 2941
  },
  {
    dni: "40725148",
    nombre: "VICTOR ANDRES PACURI MOLLENEDO",
    deuda: 1646.81,
    origen: "BANCO FALABELLA",
    oferta: 568.1,
    monto_cancelacion: 494
  },
  {
    dni: "40751425",
    nombre: "DANIEL SANTOS GONZALES CARPIO",
    deuda: 42123.52,
    origen: "BANCO FALABELLA",
    oferta: 14532.55,
    monto_cancelacion: 12637
  },
  {
    dni: "40752629",
    nombre: "CHAVEZ RAMOS GLENN BILL",
    deuda: 3264.84,
    origen: "BANCO FALABELLA",
    oferta: 1125.85,
    monto_cancelacion: 979
  },
  {
    dni: "40763173",
    nombre: "VICTOR JAIME ARRIETA",
    deuda: 50782.04,
    origen: "BANCO FALABELLA",
    oferta: 17520.25,
    monto_cancelacion: 15235
  },
  {
    dni: "40773118",
    nombre: "EDWARD EDILBERTO APOLINAR RODRIGUEZ",
    deuda: 8397.37,
    origen: "BANCO FALABELLA",
    oferta: 2896.85,
    monto_cancelacion: 2519
  },
  {
    dni: "40817462",
    nombre: "JOSE SANTOS VASQUEZ AYALA",
    deuda: 3201.33,
    origen: "BANCO FALABELLA",
    oferta: 1104.0,
    monto_cancelacion: 960
  },
  {
    dni: "40821176",
    nombre: "LOPEZ MARIÑOS CARMEN PAULA",
    deuda: 3997.26,
    origen: "RIPLEY",
    oferta: 1378.85,
    monto_cancelacion: 1199
  },
  {
    dni: "40832493",
    nombre: "ROBERTO ANGEL PIANTO RODRIGUEZ",
    deuda: 1010.49,
    origen: "BANCO FALABELLA",
    oferta: 348.45,
    monto_cancelacion: 303
  },
  {
    dni: "40832623",
    nombre: "EDWIN JESUS SOTELO YAURI",
    deuda: 1593.3,
    origen: "BANCO FALABELLA",
    oferta: 549.7,
    monto_cancelacion: 478
  },
  {
    dni: "40839893",
    nombre: "GISELLA FLORES SOTILLO",
    deuda: 1019.6,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "40845764",
    nombre: "ERNESTO RAUL HEREDIA TORRES",
    deuda: 9173.35,
    origen: "BANCO FALABELLA",
    oferta: 3164.8,
    monto_cancelacion: 2752
  },
  {
    dni: "40855302",
    nombre: "RICARDO MANUEL RIOS CHIROQUE",
    deuda: 1018.97,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "40896981",
    nombre: "ANDREA YANINA AMORETTI AYBAR",
    deuda: 2015.62,
    origen: "BANCO FALABELLA",
    oferta: 695.75,
    monto_cancelacion: 605
  },
  {
    dni: "40899922",
    nombre: "LUIS GUILLERMO SIMARAURA HERRERA",
    deuda: 11313.92,
    origen: "BANCO FALABELLA",
    oferta: 3903.1,
    monto_cancelacion: 3394
  },
  {
    dni: "40920726",
    nombre: "MILAGROS YEIMI RUDAS JARA",
    deuda: 10997.03,
    origen: "BANCO FALABELLA",
    oferta: 3793.85,
    monto_cancelacion: 3299
  },
  {
    dni: "40920789",
    nombre: "HUBECK PINTADO CARLA BERENICE",
    deuda: 18512.39,
    origen: "RIPLEY",
    oferta: 6387.1,
    monto_cancelacion: 5554
  },
  {
    dni: "40933145",
    nombre: "WENDY YSABEL CONTRERAS CURO",
    deuda: 4589.66,
    origen: "BANCO FALABELLA",
    oferta: 1583.55,
    monto_cancelacion: 1377
  },
  {
    dni: "40969769",
    nombre: "SANABRIA SUAREZ LAURA RUTH",
    deuda: 5899.52,
    origen: "RIPLEY",
    oferta: 2035.5,
    monto_cancelacion: 1770
  },
  {
    dni: "40997852",
    nombre: "JOEL HECTOR CHACON ALARCON",
    deuda: 2044.98,
    origen: "BANCO FALABELLA",
    oferta: 704.95,
    monto_cancelacion: 613
  },
  {
    dni: "41062814",
    nombre: "WILIAN BUSTOS HERRERA",
    deuda: 13126.83,
    origen: "BANCO FALABELLA",
    oferta: 4528.7,
    monto_cancelacion: 3938
  },
  {
    dni: "41065817",
    nombre: "CORRALES SILVA KARLA GERALDINE",
    deuda: 1162.17,
    origen: "MIBANCO",
    oferta: 401.35,
    monto_cancelacion: 349
  },
  {
    dni: "41082711",
    nombre: "SEGUNDO ALEGRIA FLORES",
    deuda: 1779.77,
    origen: "BANCO FALABELLA",
    oferta: 614.1,
    monto_cancelacion: 534
  },
  {
    dni: "41092222",
    nombre: "JOANNE LIESSEL QUIJANDRIA MEJIA",
    deuda: 2341.04,
    origen: "BANCO FALABELLA",
    oferta: 807.3,
    monto_cancelacion: 702
  },
  {
    dni: "41099573",
    nombre: "CESAR ARMANDO ALEMAN VALLADARES",
    deuda: 14943.12,
    origen: "BANCO FALABELLA",
    oferta: 5155.45,
    monto_cancelacion: 4483
  },
  {
    dni: "41113019",
    nombre: "CHAVEZ RODRIGUEZ ROBERTO",
    deuda: 21425.25,
    origen: "BCP",
    oferta: 7392.2,
    monto_cancelacion: 6428
  },
  {
    dni: "41129405",
    nombre: "GOICOCHEA BACA NERI DENIZ",
    deuda: 5080.57,
    origen: "BANCO FALABELLA",
    oferta: 1752.6,
    monto_cancelacion: 1524
  },
  {
    dni: "41158344",
    nombre: "JOSE LUIS TICSE CARHUALLANQUI",
    deuda: 6522.31,
    origen: "BANCO FALABELLA",
    oferta: 2250.55,
    monto_cancelacion: 1957
  },
  {
    dni: "41180933",
    nombre: "DENNIS ALFREDO VARGAS LUDEÐA",
    deuda: 22392.54,
    origen: "BANCO FALABELLA",
    oferta: 7725.7,
    monto_cancelacion: 6718
  },
  {
    dni: "41203906",
    nombre: "JOE LUIS FALEN PALOMINO",
    deuda: 1428.3000000000002,
    origen: "BANCO FALABELLA",
    oferta: 492.2,
    monto_cancelacion: 428
  },
  {
    dni: "41271459",
    nombre: "OLGA HILDA AUQUI QUIÐONEZ",
    deuda: 1551.86,
    origen: "BANCO FALABELLA",
    oferta: 535.9,
    monto_cancelacion: 466
  },
  {
    dni: "41299652",
    nombre: "NORKA EDITH PAREDES DE ESPINOZA",
    deuda: 39418.29,
    origen: "BCP",
    oferta: 13598.75,
    monto_cancelacion: 11825
  },
  {
    dni: "41333037",
    nombre: "JORGE RONALD REYES TORRES",
    deuda: 2201.34,
    origen: "BANCO FALABELLA",
    oferta: 759.0,
    monto_cancelacion: 660
  },
  {
    dni: "41374701",
    nombre: "IVAN FERNANDO HUAMAN CASTILLO",
    deuda: 19607.62,
    origen: "INTERBANK",
    oferta: 6764.3,
    monto_cancelacion: 5882
  },
  {
    dni: "41375754",
    nombre: "ARTEAGA AVILA HUGO FERNANDO",
    deuda: 6110.67,
    origen: "BCP",
    oferta: 2107.95,
    monto_cancelacion: 1833
  },
  {
    dni: "41381361",
    nombre: "WALTER ALDO SILVA MEDINA",
    deuda: 1602.74,
    origen: "INTERBANK",
    oferta: 553.15,
    monto_cancelacion: 481
  },
  {
    dni: "41473942",
    nombre: "TANTALEAN DAMIAN LUIS RAUL",
    deuda: 6695.620000000001,
    origen: "RIPLEY",
    oferta: 2310.35,
    monto_cancelacion: 2009
  },
  {
    dni: "41546110",
    nombre: "ERICSON GUILLERMO BARRANTES PANDO",
    deuda: 1490.97,
    origen: "BANCO FALABELLA",
    oferta: 514.05,
    monto_cancelacion: 447
  },
  {
    dni: "41550148",
    nombre: "FRANK BAUTISTA QUISPE",
    deuda: 136013.24,
    origen: "BCP",
    oferta: 46924.6,
    monto_cancelacion: 40804
  },
  {
    dni: "41619055",
    nombre: "AMPARO GIOWANNA AHUMADA LLAVES",
    deuda: 6532.8,
    origen: "BANCO FALABELLA",
    oferta: 2254.0,
    monto_cancelacion: 1960
  },
  {
    dni: "41627008",
    nombre: "MARYLIN ULLOA BAEZ",
    deuda: 11509.62,
    origen: "BANCO FALABELLA",
    oferta: 3970.95,
    monto_cancelacion: 3453
  },
  {
    dni: "41665818",
    nombre: "JUAN CARLOS PORTUGUEZ GARCIA",
    deuda: 1320.94,
    origen: "BCP",
    oferta: 455.4,
    monto_cancelacion: 396
  },
  {
    dni: "41673883",
    nombre: "RUIDIAS ARENAS CLAUDIO MICHAEL",
    deuda: 11179.05,
    origen: "INTERBANK",
    oferta: 3857.1,
    monto_cancelacion: 3354
  },
  {
    dni: "41677661",
    nombre: "ALONSO JARAMILLO OLINDA",
    deuda: 4616.75,
    origen: "BANCO FALABELLA",
    oferta: 1592.75,
    monto_cancelacion: 1385
  },
  {
    dni: "41679158",
    nombre: "JUAN CARLOS AGUILAR MARCHENA",
    deuda: 1111.32,
    origen: "BANCO FALABELLA",
    oferta: 382.95,
    monto_cancelacion: 333
  },
  {
    dni: "41679518",
    nombre: "ALOR GUERRA JESSICA",
    deuda: 11226.89,
    origen: "RIPLEY",
    oferta: 3873.2,
    monto_cancelacion: 3368
  },
  {
    dni: "41688226",
    nombre: "CHUNGA SALVATIERRA ANITA",
    deuda: 2453.35,
    origen: "BANCO FALABELLA",
    oferta: 846.4,
    monto_cancelacion: 736
  },
  {
    dni: "41704148",
    nombre: "PATRICIA SILVA QUEVEDO",
    deuda: 10374.93,
    origen: "BANCO FALABELLA",
    oferta: 3578.8,
    monto_cancelacion: 3112
  },
  {
    dni: "41720681",
    nombre: "AUGUSTO ALEXANDER BLAS NAVARRO",
    deuda: 1345.14,
    origen: "BANCO FALABELLA",
    oferta: 464.6,
    monto_cancelacion: 404
  },
  {
    dni: "41725141",
    nombre: "JOEL MIGUEL ORTIZ VIENA",
    deuda: 9794.08,
    origen: "BANCO FALABELLA",
    oferta: 3378.7,
    monto_cancelacion: 2938
  },
  {
    dni: "41725189",
    nombre: "JUAN EZEQUIEL RUIZ SAAVEDRA",
    deuda: 6870.54,
    origen: "BANCO FALABELLA",
    oferta: 2370.15,
    monto_cancelacion: 2061
  },
  {
    dni: "41744161",
    nombre: "JHONNY ALTAMIRANO MARTINEZ",
    deuda: 1830.19,
    origen: "BANCO FALABELLA",
    oferta: 631.35,
    monto_cancelacion: 549
  },
  {
    dni: "41789189",
    nombre: "LISBETH DEL ROSARIO ALMESTAR ENRIQUE DE QUINTANA",
    deuda: 3711.57,
    origen: "INTERBANK",
    oferta: 1279.95,
    monto_cancelacion: 1113
  },
  {
    dni: "41887899",
    nombre: "JEAN PAUL REYNA CARRAN",
    deuda: 1204.77,
    origen: "BANCO FALABELLA",
    oferta: 415.15,
    monto_cancelacion: 361
  },
  {
    dni: "41932871",
    nombre: "BARTOLOME CARHUAPOMA QUISPE",
    deuda: 17233.4,
    origen: "BANCO FALABELLA",
    oferta: 5945.5,
    monto_cancelacion: 5170
  },
  {
    dni: "41940442",
    nombre: "HUACCACHI CAYAMPI RAUL VICTOR",
    deuda: 1884.09,
    origen: "BANCO FALABELLA",
    oferta: 649.75,
    monto_cancelacion: 565
  },
  {
    dni: "41975008",
    nombre: "FLORES ARANA FILADELFIA ELIZABETH",
    deuda: 1346.19,
    origen: "BANCO FALABELLA",
    oferta: 464.6,
    monto_cancelacion: 404
  },
  {
    dni: "42021423",
    nombre: "JACQUELINE VALVERDE HUERTAS",
    deuda: 3374.9500000000003,
    origen: "MIBANCO",
    oferta: 1163.8,
    monto_cancelacion: 1012
  },
  {
    dni: "42025306",
    nombre: "QUISPE ARCE SAFELY",
    deuda: 9999.16,
    origen: "BANCO FALABELLA",
    oferta: 3450.0,
    monto_cancelacion: 3000
  },
  {
    dni: "42028351",
    nombre: "LUIS SULLON ANASTACIO",
    deuda: 9212.6,
    origen: "BANCO FALABELLA",
    oferta: 3178.6,
    monto_cancelacion: 2764
  },
  {
    dni: "42029374",
    nombre: "ALBURQUEQUE VASQUEZ INGRID DEISY",
    deuda: 8295.112229999999,
    origen: "BANCO FALABELLA",
    oferta: 2862.35,
    monto_cancelacion: 2489
  },
  {
    dni: "42067397",
    nombre: "MONTOYA ESPICHAN GLEN RUTH",
    deuda: 4435.280000000001,
    origen: "RIPLEY",
    oferta: 1530.65,
    monto_cancelacion: 1331
  },
  {
    dni: "42096511",
    nombre: "RONALD ESCRIBA ESCOBAR",
    deuda: 1492.6,
    origen: "BANCO FALABELLA",
    oferta: 515.2,
    monto_cancelacion: 448
  },
  {
    dni: "42107099",
    nombre: "JULIO EUGENIO TAIPE QUISPE",
    deuda: 1477.83,
    origen: "BANCO FALABELLA",
    oferta: 509.45,
    monto_cancelacion: 443
  },
  {
    dni: "42112948",
    nombre: "VILLANUEVA GARCIA MELANIA",
    deuda: 1317.78,
    origen: "RIPLEY",
    oferta: 454.25,
    monto_cancelacion: 395
  },
  {
    dni: "42120896",
    nombre: "ISAIAS HINOSTROZA CHAYCO",
    deuda: 3763.12,
    origen: "BANCO FALABELLA",
    oferta: 1298.35,
    monto_cancelacion: 1129
  },
  {
    dni: "42124808",
    nombre: "BRIGIDO FERNANDEZ JANET JANE",
    deuda: 73241.16363,
    origen: "BCP",
    oferta: 25267.8,
    monto_cancelacion: 21972
  },
  {
    dni: "42127898",
    nombre: "SILVIA HINOSTROSA ESCOBAR",
    deuda: 2408.45,
    origen: "BANCO FALABELLA",
    oferta: 831.45,
    monto_cancelacion: 723
  },
  {
    dni: "42146998",
    nombre: "ELIO AVELINO AGUADO CORNELIO",
    deuda: 2950.12,
    origen: "BANCO FALABELLA",
    oferta: 1017.75,
    monto_cancelacion: 885
  },
  {
    dni: "42155576",
    nombre: "VICTOR ARTURO VALENZUELA LEVANO",
    deuda: 1403.0,
    origen: "BCP",
    oferta: 484.15,
    monto_cancelacion: 421
  },
  {
    dni: "42185607",
    nombre: "HECTOR SACSARA MUNAYLLA",
    deuda: 1014.32,
    origen: "BANCO FALABELLA",
    oferta: 349.6,
    monto_cancelacion: 304
  },
  {
    dni: "42192236",
    nombre: "WILDER ALARCON DIAZ",
    deuda: 3979.87,
    origen: "BANCO FALABELLA",
    oferta: 1373.1,
    monto_cancelacion: 1194
  },
  {
    dni: "42220211",
    nombre: "LEONARDO DOÐES REATEGUI",
    deuda: 1060.41,
    origen: "BANCO FALABELLA",
    oferta: 365.7,
    monto_cancelacion: 318
  },
  {
    dni: "42288037",
    nombre: "LOPEZ FAUSTINO MARLENE EVELYN",
    deuda: 22982.16,
    origen: "RIPLEY",
    oferta: 7929.25,
    monto_cancelacion: 6895
  },
  {
    dni: "42289695",
    nombre: "ELDER EDEVALDO AVILA SANCHEZ",
    deuda: 1743.38,
    origen: "BANCO FALABELLA",
    oferta: 601.45,
    monto_cancelacion: 523
  },
  {
    dni: "42309663",
    nombre: "ZHINDY MILAGROS ANTICONA MANYARI",
    deuda: 6227.54,
    origen: "BCP",
    oferta: 2148.2,
    monto_cancelacion: 1868
  },
  {
    dni: "42311023",
    nombre: "TEODOMIRA SALAS FASANANDO",
    deuda: 12505.16,
    origen: "BANCO FALABELLA",
    oferta: 4314.8,
    monto_cancelacion: 3752
  },
  {
    dni: "42311892",
    nombre: "SULLON YEPEZ OSCAR ARMANDO",
    deuda: 2931.29,
    origen: "RIPLEY",
    oferta: 1010.85,
    monto_cancelacion: 879
  },
  {
    dni: "42313963",
    nombre: "DOLORES CRUZATE JACQUELINE",
    deuda: 1777.8600000000001,
    origen: "RIPLEY",
    oferta: 612.95,
    monto_cancelacion: 533
  },
  {
    dni: "42329426",
    nombre: "ISAIAS ERMINIO CANGALAYA SEGURA",
    deuda: 1612.56,
    origen: "BANCO FALABELLA",
    oferta: 556.6,
    monto_cancelacion: 484
  },
  {
    dni: "42330913",
    nombre: "CARMEN ROSA RAMOS ANAYA",
    deuda: 2395.46,
    origen: "BANCO FALABELLA",
    oferta: 826.85,
    monto_cancelacion: 719
  },
  {
    dni: "42383215",
    nombre: "ERIKA CAROLINA PAREDES SIHUAS",
    deuda: 1309.51,
    origen: "BANCO FALABELLA",
    oferta: 451.95,
    monto_cancelacion: 393
  },
  {
    dni: "42388403",
    nombre: "MARISOL ALBRECHT IGLESIAS",
    deuda: 13446.16,
    origen: "BANCO FALABELLA",
    oferta: 4639.1,
    monto_cancelacion: 4034
  },
  {
    dni: "42449841",
    nombre: "PAUL CALAGUA BORJA",
    deuda: 13832.36,
    origen: "BANCO FALABELLA",
    oferta: 4772.5,
    monto_cancelacion: 4150
  },
  {
    dni: "42466015",
    nombre: "JOSE ANTONIO VELA MENDOZA",
    deuda: 1352.77,
    origen: "BANCO FALABELLA",
    oferta: 466.9,
    monto_cancelacion: 406
  },
  {
    dni: "42483557",
    nombre: "GINO MANUEL CUELA CUELA",
    deuda: 1318.03,
    origen: "BANCO FALABELLA",
    oferta: 454.25,
    monto_cancelacion: 395
  },
  {
    dni: "42508950",
    nombre: "HUMBERTO CHACALIAZA MAGALLANES",
    deuda: 7718.4,
    origen: "BANCO FALABELLA",
    oferta: 2663.4,
    monto_cancelacion: 2316
  },
  {
    dni: "42536000",
    nombre: "LUIS EDUARDO REYES GUARDADO",
    deuda: 2770.5,
    origen: "BANCO FALABELLA",
    oferta: 955.65,
    monto_cancelacion: 831
  },
  {
    dni: "42647781",
    nombre: "BRYAN LUIS FERNANDO RIEGA ARENAS",
    deuda: 5015.81,
    origen: "BANCO FALABELLA",
    oferta: 1730.75,
    monto_cancelacion: 1505
  },
  {
    dni: "42695553",
    nombre: "EDISON SIFUENTES BARRERA",
    deuda: 2852.66,
    origen: "BANCO FALABELLA",
    oferta: 984.4,
    monto_cancelacion: 856
  },
  {
    dni: "42698726",
    nombre: "JORGE ANTONIO VALDERRAMA SANDOVAL",
    deuda: 1119.03,
    origen: "BANCO FALABELLA",
    oferta: 386.4,
    monto_cancelacion: 336
  },
  {
    dni: "42698934",
    nombre: "MARIA MILAGROS LUJAN VALENCIA",
    deuda: 1427.13,
    origen: "BANCO FALABELLA",
    oferta: 492.2,
    monto_cancelacion: 428
  },
  {
    dni: "42740466",
    nombre: "JORGE LUIS SULLCA ACHA",
    deuda: 1232.8,
    origen: "BANCO FALABELLA",
    oferta: 425.5,
    monto_cancelacion: 370
  },
  {
    dni: "42755193",
    nombre: "CESAR AUGUSTO VALLES PELAES",
    deuda: 79365.15,
    origen: "BANCO FALABELLA",
    oferta: 27381.5,
    monto_cancelacion: 23810
  },
  {
    dni: "42771641",
    nombre: "MIGUEL ANGEL PABLO MALLQUI",
    deuda: 8679.650000000001,
    origen: "BCP",
    oferta: 2994.6,
    monto_cancelacion: 2604
  },
  {
    dni: "42788184",
    nombre: "RICHARD MIGUEL GARCIA ALARCON",
    deuda: 26043.42,
    origen: "BANCO FALABELLA",
    oferta: 8984.95,
    monto_cancelacion: 7813
  },
  {
    dni: "42874626",
    nombre: "ROMAÑA GALVEZ DE RUIZ TAYNA ROSANGELA",
    deuda: 8808.54,
    origen: "RIPLEY",
    oferta: 3039.45,
    monto_cancelacion: 2643
  },
  {
    dni: "42903047",
    nombre: "DOMER EDUARDO SANCHEZ TORRES",
    deuda: 2486.69,
    origen: "BANCO FALABELLA",
    oferta: 857.9,
    monto_cancelacion: 746
  },
  {
    dni: "42941421",
    nombre: "SANTIAGO CORDOVA LOPEZ",
    deuda: 1349.97,
    origen: "BANCO FALABELLA",
    oferta: 465.75,
    monto_cancelacion: 405
  },
  {
    dni: "42984610",
    nombre: "CLEYNER HERNANDEZ RIVEROS",
    deuda: 2762.86,
    origen: "BANCO FALABELLA",
    oferta: 953.35,
    monto_cancelacion: 829
  },
  {
    dni: "43022208",
    nombre: "VIZCARRA GRASSA SAYRAC MILAGROS",
    deuda: 1359.25,
    origen: "BANCO FALABELLA",
    oferta: 469.2,
    monto_cancelacion: 408
  },
  {
    dni: "43063126",
    nombre: "HUAMANI GARAY CLETO",
    deuda: 1835.16,
    origen: "BCP",
    oferta: 633.65,
    monto_cancelacion: 551
  },
  {
    dni: "43086826",
    nombre: "FRANK DAVID FIESTAS YARLEQUE",
    deuda: 1114.56,
    origen: "BANCO FALABELLA",
    oferta: 384.1,
    monto_cancelacion: 334
  },
  {
    dni: "43106869",
    nombre: "RICHARD OMA SALDARRIAGA OJEDA",
    deuda: 1414.63,
    origen: "BANCO FALABELLA",
    oferta: 487.6,
    monto_cancelacion: 424
  },
  {
    dni: "43151977",
    nombre: "ESTELA MESTANZA CABALLERO",
    deuda: 11037.08,
    origen: "BANCO FALABELLA",
    oferta: 3807.65,
    monto_cancelacion: 3311
  },
  {
    dni: "43311370",
    nombre: "JESUS ALBERTO CRUZ TAPULLIMA",
    deuda: 2309.79,
    origen: "BANCO FALABELLA",
    oferta: 796.95,
    monto_cancelacion: 693
  },
  {
    dni: "43313630",
    nombre: "PEDRO MANUEL CHAVEZ ROMERO",
    deuda: 1063.61,
    origen: "BANCO FALABELLA",
    oferta: 366.85,
    monto_cancelacion: 319
  },
  {
    dni: "43342267",
    nombre: "HUNG CORONEL DANTE ENRIQUE",
    deuda: 1824.25,
    origen: "BANCO FALABELLA",
    oferta: 629.05,
    monto_cancelacion: 547
  },
  {
    dni: "43382049",
    nombre: "ELMER HERRERA ALDANA",
    deuda: 1108.96,
    origen: "BANCO FALABELLA",
    oferta: 382.95,
    monto_cancelacion: 333
  },
  {
    dni: "43447570",
    nombre: "CESAR AUGUSTO CHAVARRY LLAMOSA",
    deuda: 32410.82,
    origen: "BANCO FALABELLA",
    oferta: 11181.45,
    monto_cancelacion: 9723
  },
  {
    dni: "43477075",
    nombre: "ANASTACIO GONZALES CRISTINA",
    deuda: 2335.62,
    origen: "RIPLEY",
    oferta: 806.15,
    monto_cancelacion: 701
  },
  {
    dni: "43490379",
    nombre: "CHRISTIAN FASABI MANDRUMA",
    deuda: 11672.13,
    origen: "BANCO FALABELLA",
    oferta: 4027.3,
    monto_cancelacion: 3502
  },
  {
    dni: "43571358",
    nombre: "EVELIN YAJAIRA CALDERON FLORES",
    deuda: 1528.25,
    origen: "BANCO FALABELLA",
    oferta: 526.7,
    monto_cancelacion: 458
  },
  {
    dni: "43652788",
    nombre: "ALDO JOEL DINOS AVALOS",
    deuda: 1238.25,
    origen: "BANCO FALABELLA",
    oferta: 426.65,
    monto_cancelacion: 371
  },
  {
    dni: "43667184",
    nombre: "PANTALEON INFANTES MILAGROS DEL ROSARIO",
    deuda: 16425.219999999998,
    origen: "BCP",
    oferta: 5667.2,
    monto_cancelacion: 4928
  },
  {
    dni: "43702465",
    nombre: "ROSA PATRICIA VEGAS GARCIA",
    deuda: 1079.48,
    origen: "BANCO FALABELLA",
    oferta: 372.6,
    monto_cancelacion: 324
  },
  {
    dni: "43718231",
    nombre: "VIRGINIA DE LOS MILAGROS CASTRO SILVA",
    deuda: 1343.32,
    origen: "INTERBANK",
    oferta: 463.45,
    monto_cancelacion: 403
  },
  {
    dni: "43729489",
    nombre: "DIEGO ARMANDO RIVERA CORDOVA",
    deuda: 15553.89,
    origen: "INTERBANK",
    oferta: 5365.9,
    monto_cancelacion: 4666
  },
  {
    dni: "43739215",
    nombre: "VARGAS GUERRA VARGAS FRANZ",
    deuda: 2518.2,
    origen: "BANCO FALABELLA",
    oferta: 868.25,
    monto_cancelacion: 755
  },
  {
    dni: "43797779",
    nombre: "EDER RENE GARCIA JAIME",
    deuda: 28930.73,
    origen: "INTERBANK",
    oferta: 9980.85,
    monto_cancelacion: 8679
  },
  {
    dni: "43839295",
    nombre: "TORRES BENITES CARLOS MARTIN",
    deuda: 57671.93,
    origen: "BCP",
    oferta: 19897.3,
    monto_cancelacion: 17302
  },
  {
    dni: "43859101",
    nombre: "ERIKA LISSETH TASAICO FELIX",
    deuda: 3107.57,
    origen: "BANCO FALABELLA",
    oferta: 1071.8,
    monto_cancelacion: 932
  },
  {
    dni: "43908996",
    nombre: "ALVAN FAYFFER JOAN PIER JEHOVA",
    deuda: 16193.810000000001,
    origen: "BANCO FALABELLA",
    oferta: 5586.7,
    monto_cancelacion: 4858
  },
  {
    dni: "43927666",
    nombre: "MIRIAM PAMELA CORRALES CASTRO",
    deuda: 2808.84,
    origen: "BCP",
    oferta: 969.45,
    monto_cancelacion: 843
  },
  {
    dni: "43959431",
    nombre: "NAVARRO ACASIETE KARLA JOHANA",
    deuda: 4808.98,
    origen: "RIPLEY",
    oferta: 1659.45,
    monto_cancelacion: 1443
  },
  {
    dni: "43998158",
    nombre: "JOSE RICHARD VILELA RAMOS",
    deuda: 1076.01,
    origen: "BANCO FALABELLA",
    oferta: 371.45,
    monto_cancelacion: 323
  },
  {
    dni: "44018784",
    nombre: "ANGEL RENEE SURICHAQUI PARRAGUEZ",
    deuda: 4811.39,
    origen: "BANCO FALABELLA",
    oferta: 1659.45,
    monto_cancelacion: 1443
  },
  {
    dni: "44028196",
    nombre: "RUTH NOEMI LEON REYES",
    deuda: 9830.02,
    origen: "BANCO FALABELLA",
    oferta: 3391.35,
    monto_cancelacion: 2949
  },
  {
    dni: "44131281",
    nombre: "MARIZELA ARLINI YNGA LUYO",
    deuda: 1314.49,
    origen: "BANCO FALABELLA",
    oferta: 453.1,
    monto_cancelacion: 394
  },
  {
    dni: "44155427",
    nombre: "CARMEN ROSA CESPEDES BARBOZA",
    deuda: 1014.54,
    origen: "BANCO FALABELLA",
    oferta: 349.6,
    monto_cancelacion: 304
  },
  {
    dni: "44250001",
    nombre: "WALTER DURAND DANIEL SEGUNDO",
    deuda: 3561.6499999999996,
    origen: "MIBANCO",
    oferta: 1228.2,
    monto_cancelacion: 1068
  },
  {
    dni: "44250061",
    nombre: "RAMOS DELGADO SILVIA YOLANDA",
    deuda: 5812.04,
    origen: "MIBANCO",
    oferta: 2005.6,
    monto_cancelacion: 1744
  },
  {
    dni: "44261808",
    nombre: "JHON RAMOS VIDARTE",
    deuda: 1309.58,
    origen: "BANCO FALABELLA",
    oferta: 451.95,
    monto_cancelacion: 393
  },
  {
    dni: "44280280",
    nombre: "MORENO GARCIA DAVID ANIBAL",
    deuda: 7629.75,
    origen: "BANCO FALABELLA",
    oferta: 2632.35,
    monto_cancelacion: 2289
  },
  {
    dni: "44296515",
    nombre: "TATIANA VANESSA CUENCA FLORES",
    deuda: 1481.73,
    origen: "BANCO FALABELLA",
    oferta: 511.75,
    monto_cancelacion: 445
  },
  {
    dni: "44331655",
    nombre: "LADY SUNETH AZAÐA BASTIAND",
    deuda: 6526.11,
    origen: "BANCO FALABELLA",
    oferta: 2251.7,
    monto_cancelacion: 1958
  },
  {
    dni: "44337162",
    nombre: "KATHERINE FIORELLA TORRES PARVINA",
    deuda: 1394.08,
    origen: "BANCO FALABELLA",
    oferta: 480.7,
    monto_cancelacion: 418
  },
  {
    dni: "44340616",
    nombre: "PERCY JEANS TUME ALFARO",
    deuda: 12944.539999999999,
    origen: "BCP",
    oferta: 4465.45,
    monto_cancelacion: 3883
  },
  {
    dni: "44343619",
    nombre: "DONAYRE VELA LILIAN DESIREE",
    deuda: 27979.88,
    origen: "BANCO FALABELLA",
    oferta: 9653.1,
    monto_cancelacion: 8394
  },
  {
    dni: "44352669",
    nombre: "ENRIQUE PANTA VASQUEZ",
    deuda: 1999.12,
    origen: "BANCO FALABELLA",
    oferta: 690.0,
    monto_cancelacion: 600
  },
  {
    dni: "44369661",
    nombre: "LUIS GUILLERMO YANCE FIESTAS",
    deuda: 3310.86,
    origen: "BANCO FALABELLA",
    oferta: 1141.95,
    monto_cancelacion: 993
  },
  {
    dni: "44401626",
    nombre: "DIEGO ORLANDO DE LA CRUZ CALIXTO",
    deuda: 3306.42,
    origen: "BANCO FALABELLA",
    oferta: 1140.8,
    monto_cancelacion: 992
  },
  {
    dni: "44405182",
    nombre: "ELMER JOEL PAIVA NIMA",
    deuda: 2879.14,
    origen: "BANCO FALABELLA",
    oferta: 993.6,
    monto_cancelacion: 864
  },
  {
    dni: "44424273",
    nombre: "LILIANA SERRATO MONDRAGON",
    deuda: 1997.56,
    origen: "BANCO FALABELLA",
    oferta: 688.85,
    monto_cancelacion: 599
  },
  {
    dni: "44479953",
    nombre: "JARA CHAMBI JOICE SHARON",
    deuda: 1817.88,
    origen: "MIBANCO",
    oferta: 626.75,
    monto_cancelacion: 545
  },
  {
    dni: "44480292",
    nombre: "GIAN CARLO AUGUSTO MENESES ASTO",
    deuda: 23361.11,
    origen: "BCP",
    oferta: 8059.2,
    monto_cancelacion: 7008
  },
  {
    dni: "44512792",
    nombre: "CANTOS GASCO JUAN CARLOS",
    deuda: 2709.1800000000003,
    origen: "MIBANCO",
    oferta: 934.95,
    monto_cancelacion: 813
  },
  {
    dni: "44568329",
    nombre: "PERFECTO REBAZA JOSUE ADAN",
    deuda: 10227.09,
    origen: "RIPLEY",
    oferta: 3528.2,
    monto_cancelacion: 3068
  },
  {
    dni: "44580812",
    nombre: "LOURDES CHAVARRY CABRERA",
    deuda: 2693.13,
    origen: "BANCO FALABELLA",
    oferta: 929.2,
    monto_cancelacion: 808
  },
  {
    dni: "44656000",
    nombre: "PARIONA AMAYA IVONNE",
    deuda: 24549.64,
    origen: "INTERBANK",
    oferta: 8469.75,
    monto_cancelacion: 7365
  },
  {
    dni: "44669733",
    nombre: "CEDRID DOUGLAS LACHIRA SANTOS",
    deuda: 2420.21,
    origen: "BANCO FALABELLA",
    oferta: 834.9,
    monto_cancelacion: 726
  },
  {
    dni: "44671379",
    nombre: "FREDY LOPEZ AYESTA",
    deuda: 1019.6,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "44724982",
    nombre: "HECTOR MANUEL VILCHEZ DURAN",
    deuda: 13988.32,
    origen: "BANCO FALABELLA",
    oferta: 4825.4,
    monto_cancelacion: 4196
  },
  {
    dni: "44757337",
    nombre: "CORSINO MEDINA MICHAEL",
    deuda: 13656.67,
    origen: "RIPLEY",
    oferta: 4711.55,
    monto_cancelacion: 4097
  },
  {
    dni: "44767568",
    nombre: "AGUIRRE CHAPILLIQUEN JULIO RAFAEL",
    deuda: 1170.55,
    origen: "MIBANCO",
    oferta: 403.65,
    monto_cancelacion: 351
  },
  {
    dni: "44778834",
    nombre: "MILDEN OMEL HUAMAN OSORIO",
    deuda: 13931.21,
    origen: "BANCO FALABELLA",
    oferta: 4805.85,
    monto_cancelacion: 4179
  },
  {
    dni: "44883248",
    nombre: "NATHALIE YUCELI ZEVALLOS SALAZAR",
    deuda: 12618.97,
    origen: "BANCO FALABELLA",
    oferta: 4353.9,
    monto_cancelacion: 3786
  },
  {
    dni: "44912606",
    nombre: "DAMIANI DIAZ CRISTY ELEINE",
    deuda: 1189.44,
    origen: "RIPLEY",
    oferta: 410.55,
    monto_cancelacion: 357
  },
  {
    dni: "44973520",
    nombre: "CHAUCA GIHUA VICTOR RAUL",
    deuda: 5314.110000000001,
    origen: "BCP",
    oferta: 1833.1,
    monto_cancelacion: 1594
  },
  {
    dni: "45032657",
    nombre: "JUAN FERNANDO MASCA CUCHO",
    deuda: 4961.18,
    origen: "BANCO FALABELLA",
    oferta: 1711.2,
    monto_cancelacion: 1488
  },
  {
    dni: "45041483",
    nombre: "VILLAFUERTE ESPINOZA PURIFICACION",
    deuda: 40033.149999999994,
    origen: "BCP",
    oferta: 13811.5,
    monto_cancelacion: 12010
  },
  {
    dni: "45084432",
    nombre: "JOSE ALEXANDER PRADO GARCIA",
    deuda: 1022.1,
    origen: "BANCO FALABELLA",
    oferta: 353.05,
    monto_cancelacion: 307
  },
  {
    dni: "45127765",
    nombre: "YUBERT ANTONIO YARLEQUE CORDOVA",
    deuda: 1500.35,
    origen: "BANCO FALABELLA",
    oferta: 517.5,
    monto_cancelacion: 450
  },
  {
    dni: "45171106",
    nombre: "ANA MARIELA ARPASACA HUANACO",
    deuda: 2576.3,
    origen: "BANCO FALABELLA",
    oferta: 888.95,
    monto_cancelacion: 773
  },
  {
    dni: "45215748",
    nombre: "POMA ARANA ENITH ELLEN",
    deuda: 5065.44,
    origen: "RIPLEY",
    oferta: 1748.0,
    monto_cancelacion: 1520
  },
  {
    dni: "45243892",
    nombre: "LA-ROSA AGUIRRE ROBERTO ANTONIO",
    deuda: 14589.53,
    origen: "BCP",
    oferta: 5033.55,
    monto_cancelacion: 4377
  },
  {
    dni: "45321547",
    nombre: "JHOEL FASANANDO RENGIFO",
    deuda: 1736.78,
    origen: "BANCO FALABELLA",
    oferta: 599.15,
    monto_cancelacion: 521
  },
  {
    dni: "45405882",
    nombre: "DANIEL PINEDO FERNANDEZ",
    deuda: 1221.22,
    origen: "BANCO FALABELLA",
    oferta: 420.9,
    monto_cancelacion: 366
  },
  {
    dni: "45437470",
    nombre: "SILVA AREVALO EFIGENIA CECILIA",
    deuda: 11387.95,
    origen: "BANCO FALABELLA",
    oferta: 3928.4,
    monto_cancelacion: 3416
  },
  {
    dni: "45449455",
    nombre: "GUILLERMO ALBERTO PALMA DE LOS SANTOS",
    deuda: 4701.91,
    origen: "BANCO FALABELLA",
    oferta: 1622.65,
    monto_cancelacion: 1411
  },
  {
    dni: "45450246",
    nombre: "JAVIER MOISES CANAZA LOPEZ",
    deuda: 6097.76,
    origen: "BANCO FALABELLA",
    oferta: 2103.35,
    monto_cancelacion: 1829
  },
  {
    dni: "45458259",
    nombre: "LUIGI DAVID FLORES FELIX",
    deuda: 2509.07,
    origen: "BANCO FALABELLA",
    oferta: 865.95,
    monto_cancelacion: 753
  },
  {
    dni: "45509927",
    nombre: "EDITH OYOLA HUAMAN",
    deuda: 1681.05,
    origen: "BANCO FALABELLA",
    oferta: 579.6,
    monto_cancelacion: 504
  },
  {
    dni: "45514534",
    nombre: "ANTHONY KENNEDY GOMEZ GARCIA",
    deuda: 3446.92,
    origen: "BANCO FALABELLA",
    oferta: 1189.1,
    monto_cancelacion: 1034
  },
  {
    dni: "45602875",
    nombre: "KRISTEL TOVAR ZUÐIGA",
    deuda: 8814.35,
    origen: "BANCO FALABELLA",
    oferta: 3040.6,
    monto_cancelacion: 2644
  },
  {
    dni: "45627269",
    nombre: "GILMER EDUARD VELASQUEZ CASTRO",
    deuda: 3380.33,
    origen: "BANCO FALABELLA",
    oferta: 1166.1,
    monto_cancelacion: 1014
  },
  {
    dni: "45663726",
    nombre: "DANILO FREDDY MISAHUAMAN ACSARA",
    deuda: 32092.519999999997,
    origen: "BCP",
    oferta: 11072.2,
    monto_cancelacion: 9628
  },
  {
    dni: "45688787",
    nombre: "LANDA COCA HECTOR ISAI",
    deuda: 12158.89,
    origen: "INTERBANK",
    oferta: 4195.2,
    monto_cancelacion: 3648
  },
  {
    dni: "45711248",
    nombre: "SEGURA JORGE EDUARDO EDUARDO SANTA CRUZ",
    deuda: 4239.59,
    origen: "BANCO FALABELLA",
    oferta: 1462.8,
    monto_cancelacion: 1272
  },
  {
    dni: "45802701",
    nombre: "JOSE LUIS PAUCAR SICCHA",
    deuda: 4249.28,
    origen: "BANCO FALABELLA",
    oferta: 1466.25,
    monto_cancelacion: 1275
  },
  {
    dni: "45920997",
    nombre: "GALECIO BALAREZO DENISSE GABRIELA",
    deuda: 24944.88,
    origen: "INTERBANK",
    oferta: 8605.45,
    monto_cancelacion: 7483
  },
  {
    dni: "45938546",
    nombre: "ABEL SANTOS ALIAGA",
    deuda: 1459.86,
    origen: "BANCO FALABELLA",
    oferta: 503.7,
    monto_cancelacion: 438
  },
  {
    dni: "45955286",
    nombre: "QUINTANA PALACIOS IVON LIZET",
    deuda: 6105.77,
    origen: "RIPLEY",
    oferta: 2106.8,
    monto_cancelacion: 1832
  },
  {
    dni: "45972223",
    nombre: "RAMOS GAGO DEYSI KETY",
    deuda: 3498.35,
    origen: "BCP",
    oferta: 1207.5,
    monto_cancelacion: 1050
  },
  {
    dni: "46018197",
    nombre: "CULQUI CAMUS WUALTER",
    deuda: 40617.06,
    origen: "INTERBANK",
    oferta: 14012.75,
    monto_cancelacion: 12185
  },
  {
    dni: "46061603",
    nombre: "BEEKER GONHNY MACAZANA ANDIA",
    deuda: 1115.09,
    origen: "BANCO FALABELLA",
    oferta: 385.25,
    monto_cancelacion: 335
  },
  {
    dni: "46073427",
    nombre: "JAVIER HURTADO GRUBAS",
    deuda: 1023.86,
    origen: "BANCO FALABELLA",
    oferta: 353.05,
    monto_cancelacion: 307
  },
  {
    dni: "46108377",
    nombre: "SALVADOR HUAMAN DAGUBERTO FABIAN",
    deuda: 7296.47,
    origen: "BANCO FALABELLA",
    oferta: 2517.35,
    monto_cancelacion: 2189
  },
  {
    dni: "46116505",
    nombre: "JHON WILIAM VALENZUELA CASTILLO",
    deuda: 7970.83,
    origen: "BANCO FALABELLA",
    oferta: 2749.65,
    monto_cancelacion: 2391
  },
  {
    dni: "46123528",
    nombre: "RIOS RAMIREZ GIANCARLOS EDILBIADE",
    deuda: 9509.73,
    origen: "RIPLEY",
    oferta: 3280.95,
    monto_cancelacion: 2853
  },
  {
    dni: "46138767",
    nombre: "JHENNY SUSY GUTARRA POZO",
    deuda: 6158.43,
    origen: "BANCO FALABELLA",
    oferta: 2125.2,
    monto_cancelacion: 1848
  },
  {
    dni: "46162548",
    nombre: "SONIA LUCILA MAURICCI SALVADOR",
    deuda: 1824.93,
    origen: "BANCO FALABELLA",
    oferta: 629.05,
    monto_cancelacion: 547
  },
  {
    dni: "46166625",
    nombre: "PINTO RIVERA JOHN FABIO",
    deuda: 11457.36,
    origen: "INTERBANK",
    oferta: 3952.55,
    monto_cancelacion: 3437
  },
  {
    dni: "46166670",
    nombre: "CESAR WILLIAMS VILLAR CASAFRANCA",
    deuda: 4013.16,
    origen: "BANCO FALABELLA",
    oferta: 1384.6,
    monto_cancelacion: 1204
  },
  {
    dni: "46179369",
    nombre: "JIMMY DIAZ SIHUINCHO",
    deuda: 15669.13,
    origen: "BCP",
    oferta: 5406.15,
    monto_cancelacion: 4701
  },
  {
    dni: "46181089",
    nombre: "SAMAME FERNANDEZ MIRIAM",
    deuda: 7050.639999999999,
    origen: "RIPLEY",
    oferta: 2432.25,
    monto_cancelacion: 2115
  },
  {
    dni: "46206679",
    nombre: "EDUARDO FABIAN QUILLA MENDOZA",
    deuda: 1245.68,
    origen: "BANCO FALABELLA",
    oferta: 430.1,
    monto_cancelacion: 374
  },
  {
    dni: "46215334",
    nombre: "GUIZADO MANSILLA JESUS ALBERTO",
    deuda: 2577.3500000000004,
    origen: "BCP",
    oferta: 888.95,
    monto_cancelacion: 773
  },
  {
    dni: "46221348",
    nombre: "FLORES CALDERON ANA AMALIA",
    deuda: 1470.43,
    origen: "BANCO FALABELLA",
    oferta: 507.15,
    monto_cancelacion: 441
  },
  {
    dni: "46232511",
    nombre: "CRISTHIAN VLADIMIR SOSA CAMPOMANES",
    deuda: 1709.97,
    origen: "BANCO FALABELLA",
    oferta: 589.95,
    monto_cancelacion: 513
  },
  {
    dni: "46263811",
    nombre: "KATHERINE FIORELA GUERRERO SANCHEZ",
    deuda: 1200.0,
    origen: "BANCO FALABELLA",
    oferta: 414.0,
    monto_cancelacion: 360
  },
  {
    dni: "46270842",
    nombre: "JOSE MANUEL GOMEZ NAVARRO",
    deuda: 1045.68,
    origen: "BANCO FALABELLA",
    oferta: 361.1,
    monto_cancelacion: 314
  },
  {
    dni: "46305871",
    nombre: "GUZMAN FERNANDEZ ERILY LISSET",
    deuda: 1314.55,
    origen: "BANCO FALABELLA",
    oferta: 453.1,
    monto_cancelacion: 394
  },
  {
    dni: "46327680",
    nombre: "JULIO CESAR JORGE CCOYO",
    deuda: 12909.6,
    origen: "BANCO FALABELLA",
    oferta: 4453.95,
    monto_cancelacion: 3873
  },
  {
    dni: "46347977",
    nombre: "MIGUEL ANGEL AGUIRRE ESPINOZA",
    deuda: 4864.61,
    origen: "BANCO FALABELLA",
    oferta: 1677.85,
    monto_cancelacion: 1459
  },
  {
    dni: "46378923",
    nombre: "LUIS MAXIMO HUAMAN HUAMANI",
    deuda: 1205.89,
    origen: "BANCO FALABELLA",
    oferta: 416.3,
    monto_cancelacion: 362
  },
  {
    dni: "46382967",
    nombre: "HENRRY JESUS HUAMANI RODRIGUEZ",
    deuda: 5897.85,
    origen: "BANCO FALABELLA",
    oferta: 2034.35,
    monto_cancelacion: 1769
  },
  {
    dni: "46426882",
    nombre: "CAROLINA LIZETH ROJAS CARDENAS",
    deuda: 2099.21,
    origen: "BANCO FALABELLA",
    oferta: 724.5,
    monto_cancelacion: 630
  },
  {
    dni: "46470050",
    nombre: "VICTOR EDUARDO DELGADO CARRASCO",
    deuda: 1409.69,
    origen: "BANCO FALABELLA",
    oferta: 486.45,
    monto_cancelacion: 423
  },
  {
    dni: "46483092",
    nombre: "PERCY SANTIAGO SIALER DIAZ",
    deuda: 13383.28,
    origen: "BANCO FALABELLA",
    oferta: 4617.25,
    monto_cancelacion: 4015
  },
  {
    dni: "46531032",
    nombre: "SAAVEDRA REMAYCUNA DIEGO YOEL",
    deuda: 2102.04,
    origen: "MIBANCO",
    oferta: 725.65,
    monto_cancelacion: 631
  },
  {
    dni: "46668819",
    nombre: "ROSA DE LOS ANGELES SARAVIA CADENILLAS",
    deuda: 3564.03,
    origen: "BANCO FALABELLA",
    oferta: 1229.35,
    monto_cancelacion: 1069
  },
  {
    dni: "46737522",
    nombre: "KATHERIN MARIA AREVALO VERA",
    deuda: 1265.59,
    origen: "BANCO FALABELLA",
    oferta: 437.0,
    monto_cancelacion: 380
  },
  {
    dni: "46780591",
    nombre: "CUEVA ROSALES CATHERINE JESUS",
    deuda: 31310.13,
    origen: "INTERBANK",
    oferta: 10801.95,
    monto_cancelacion: 9393
  },
  {
    dni: "46784376",
    nombre: "LIZ JOSELYN ATANACIO MACHAHUA",
    deuda: 1037.67,
    origen: "BANCO FALABELLA",
    oferta: 357.65,
    monto_cancelacion: 311
  },
  {
    dni: "46811040",
    nombre: "VICTOR HUGO TASAYCO APOLAYA",
    deuda: 22508.7,
    origen: "INTERBANK",
    oferta: 7765.95,
    monto_cancelacion: 6753
  },
  {
    dni: "46868668",
    nombre: "FLORES CALLIRGOS ABEL ORLANDO",
    deuda: 17752.13,
    origen: "INTERBANK",
    oferta: 6124.9,
    monto_cancelacion: 5326
  },
  {
    dni: "46885527",
    nombre: "LUIS ARNALDO MERMA ROSALES",
    deuda: 1803.61,
    origen: "BANCO FALABELLA",
    oferta: 622.15,
    monto_cancelacion: 541
  },
  {
    dni: "46935668",
    nombre: "PATRICIA PAOLA GONZALES MORA",
    deuda: 1218.76,
    origen: "BANCO FALABELLA",
    oferta: 420.9,
    monto_cancelacion: 366
  },
  {
    dni: "47000825",
    nombre: "JOSELINE JUDITH LIZARBE CABRERA",
    deuda: 1224.71,
    origen: "BANCO FALABELLA",
    oferta: 422.05,
    monto_cancelacion: 367
  },
  {
    dni: "47042887",
    nombre: "LETICIA BEATRIZ QUIÐONES DURAN",
    deuda: 1540.87,
    origen: "BANCO FALABELLA",
    oferta: 531.3,
    monto_cancelacion: 462
  },
  {
    dni: "47098239",
    nombre: "TAYLOR STEWARD ACUÐA AGUILAR",
    deuda: 1718.97,
    origen: "BANCO FALABELLA",
    oferta: 593.4,
    monto_cancelacion: 516
  },
  {
    dni: "47133979",
    nombre: "JULIA SUAREZ BAZAN",
    deuda: 5149.45,
    origen: "BANCO FALABELLA",
    oferta: 1776.75,
    monto_cancelacion: 1545
  },
  {
    dni: "47137354",
    nombre: "JOEL EFRAIN TELLO GARCIA",
    deuda: 4305.01,
    origen: "BANCO FALABELLA",
    oferta: 1485.8,
    monto_cancelacion: 1292
  },
  {
    dni: "47226626",
    nombre: "TEODORO FLORES CHINCHAY",
    deuda: 1355.69,
    origen: "BANCO FALABELLA",
    oferta: 468.05,
    monto_cancelacion: 407
  },
  {
    dni: "47259632",
    nombre: "SARAI MARA HINOSTROZA ZURITA",
    deuda: 1947.11,
    origen: "BANCO FALABELLA",
    oferta: 671.6,
    monto_cancelacion: 584
  },
  {
    dni: "47327606",
    nombre: "EVER LUIS CORONEL VEGA",
    deuda: 1947.39,
    origen: "BANCO FALABELLA",
    oferta: 671.6,
    monto_cancelacion: 584
  },
  {
    dni: "47329144",
    nombre: "CAROLINA MAFALDO RENGIFO",
    deuda: 1939.28,
    origen: "BANCO FALABELLA",
    oferta: 669.3,
    monto_cancelacion: 582
  },
  {
    dni: "47374261",
    nombre: "EDGAR FAUSTINO JULCA CRISOSTOMO",
    deuda: 6372.04,
    origen: "BANCO FALABELLA",
    oferta: 2198.8,
    monto_cancelacion: 1912
  },
  {
    dni: "47482363",
    nombre: "JORDAN FRANCO PONCE ROSALES",
    deuda: 2234.49,
    origen: "BANCO FALABELLA",
    oferta: 770.5,
    monto_cancelacion: 670
  },
  {
    dni: "47508099",
    nombre: "DELIA CONSUELO CAVERO VALLADARES",
    deuda: 1010.6500000000001,
    origen: "BANCO FALABELLA",
    oferta: 348.45,
    monto_cancelacion: 303
  },
  {
    dni: "47508982",
    nombre: "RUD JOVANA AYALA VALDERRAMA",
    deuda: 3064.85,
    origen: "BANCO FALABELLA",
    oferta: 1056.85,
    monto_cancelacion: 919
  },
  {
    dni: "47516280",
    nombre: "ALAIN YORDANO BRAVO PORTILLA",
    deuda: 2385.6099999999997,
    origen: "BANCO FALABELLA",
    oferta: 823.4,
    monto_cancelacion: 716
  },
  {
    dni: "47518634",
    nombre: "LEONARDO ACHO OCHAVANO",
    deuda: 1196.44,
    origen: "BANCO FALABELLA",
    oferta: 412.85,
    monto_cancelacion: 359
  },
  {
    dni: "47539071",
    nombre: "RAUL JUNIOR STEFANO ESPINOZA MALACAS",
    deuda: 1017.65,
    origen: "BANCO FALABELLA",
    oferta: 350.75,
    monto_cancelacion: 305
  },
  {
    dni: "47592386",
    nombre: "NELSON LUJAN LUJAN",
    deuda: 1095.36,
    origen: "BANCO FALABELLA",
    oferta: 378.35,
    monto_cancelacion: 329
  },
  {
    dni: "47616913",
    nombre: "JUAN JOSE FARIAS ALTAMIRANO",
    deuda: 3727.9,
    origen: "BANCO FALABELLA",
    oferta: 1285.7,
    monto_cancelacion: 1118
  },
  {
    dni: "47623711",
    nombre: "CHOLAN ROCHA JOHANA LEYSU",
    deuda: 7223.85,
    origen: "BANCO FALABELLA",
    oferta: 2492.05,
    monto_cancelacion: 2167
  },
  {
    dni: "47634292",
    nombre: "EDWARD ALFREDO SILVA AREVALO",
    deuda: 1487.81,
    origen: "BANCO FALABELLA",
    oferta: 512.9,
    monto_cancelacion: 446
  },
  {
    dni: "47650005",
    nombre: "TONY MICHAEL SOSA QUICHUA",
    deuda: 1106.18,
    origen: "BANCO FALABELLA",
    oferta: 381.8,
    monto_cancelacion: 332
  },
  {
    dni: "47782421",
    nombre: "MIGUEL JEANPIER CABRERA HERNANDEZ",
    deuda: 2197.52,
    origen: "BANCO FALABELLA",
    oferta: 757.85,
    monto_cancelacion: 659
  },
  {
    dni: "47885321",
    nombre: "CENIZARIO VASQUEZ LUIS GUSTAVO",
    deuda: 1590.81,
    origen: "RIPLEY",
    oferta: 548.55,
    monto_cancelacion: 477
  },
  {
    dni: "47908627",
    nombre: "LILIBETH ALEXANDRA VALENCIA RONQUILLO",
    deuda: 1101.75,
    origen: "BANCO FALABELLA",
    oferta: 380.65,
    monto_cancelacion: 331
  },
  {
    dni: "47916749",
    nombre: "BEATRIZ ANDREA TOLEDO CCASANI",
    deuda: 1511.6,
    origen: "BANCO FALABELLA",
    oferta: 520.95,
    monto_cancelacion: 453
  },
  {
    dni: "47928698",
    nombre: "PAHUACHO URIBE RONY MIGUEL",
    deuda: 6484.21,
    origen: "BANCO FALABELLA",
    oferta: 2236.75,
    monto_cancelacion: 1945
  },
  {
    dni: "47967426",
    nombre: "NICANOR FACUNDO PEÐA",
    deuda: 1350.58,
    origen: "BANCO FALABELLA",
    oferta: 465.75,
    monto_cancelacion: 405
  },
  {
    dni: "48027548",
    nombre: "JUAN TANGOA RIOS",
    deuda: 1936.4,
    origen: "BANCO FALABELLA",
    oferta: 668.15,
    monto_cancelacion: 581
  },
  {
    dni: "48037041",
    nombre: "ANTHONY FRANKI GOMERO ZAPATA",
    deuda: 1433.69,
    origen: "BANCO FALABELLA",
    oferta: 494.5,
    monto_cancelacion: 430
  },
  {
    dni: "48320132",
    nombre: "WHUAGNER IDED BARDALES FLORES",
    deuda: 1217.41,
    origen: "BANCO FALABELLA",
    oferta: 419.75,
    monto_cancelacion: 365
  },
  {
    dni: "48629054",
    nombre: "IRIS MASSIEL JUAREZ SUYON",
    deuda: 1344.4,
    origen: "BANCO FALABELLA",
    oferta: 463.45,
    monto_cancelacion: 403
  },
  {
    dni: "48795441",
    nombre: "JHON HARRISON XAVIER RUIZ BURGOS",
    deuda: 1361.4,
    origen: "BANCO FALABELLA",
    oferta: 469.2,
    monto_cancelacion: 408
  },
  {
    dni: "60307125",
    nombre: "JEREMI PACHECO MEDINA",
    deuda: 1167.54,
    origen: "BANCO FALABELLA",
    oferta: 402.5,
    monto_cancelacion: 350
  },
  {
    dni: "70065259",
    nombre: "FIORELLA ALEXANDRA ZAVALA PANGALIMA",
    deuda: 16284.53,
    origen: "BANCO FALABELLA",
    oferta: 5617.75,
    monto_cancelacion: 4885
  },
  {
    dni: "70764619",
    nombre: "GIANMARCO AGUSTIN LOZANO HURTADO",
    deuda: 1021.2,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "70773728",
    nombre: "YAHAIRA YASMIN SALDAÐA ALCALDE",
    deuda: 1019.89,
    origen: "BANCO FALABELLA",
    oferta: 351.9,
    monto_cancelacion: 306
  },
  {
    dni: "71084217",
    nombre: "VIVIANA STEFANY SULLON BARRIENTOS",
    deuda: 1017.35,
    origen: "BANCO FALABELLA",
    oferta: 350.75,
    monto_cancelacion: 305
  },
  {
    dni: "71523224",
    nombre: "JONATAN AMOS CORDOVA VASQUEZ",
    deuda: 1349.92,
    origen: "BANCO FALABELLA",
    oferta: 465.75,
    monto_cancelacion: 405
  },
  {
    dni: "71526157",
    nombre: "YLIANA TALIA BORJAS FELIPA",
    deuda: 1613.17,
    origen: "BANCO FALABELLA",
    oferta: 556.6,
    monto_cancelacion: 484
  },
  {
    dni: "72149002",
    nombre: "JOEL ERICK CORDOVA RAMOS",
    deuda: 1733.66,
    origen: "BANCO FALABELLA",
    oferta: 598.0,
    monto_cancelacion: 520
  },
  {
    dni: "72979059",
    nombre: "ENZO BRAYAN HIDALGO RAMIREZ",
    deuda: 8465.66,
    origen: "BANCO FALABELLA",
    oferta: 2921.0,
    monto_cancelacion: 2540
  },
  {
    dni: "73247446",
    nombre: "VALENCIA CHIRA WILLIAM FERNANDO",
    deuda: 2545.15,
    origen: "BANCO FALABELLA",
    oferta: 878.6,
    monto_cancelacion: 764
  },
  {
    dni: "74379163",
    nombre: "YAHAYDA FLORES TICONA",
    deuda: 1033.6,
    origen: "BANCO FALABELLA",
    oferta: 356.5,
    monto_cancelacion: 310
  },
  {
    dni: "80026121",
    nombre: "MUÑOZ LOZANO IRENE",
    deuda: 5186.79,
    origen: "RIPLEY",
    oferta: 1789.4,
    monto_cancelacion: 1556
  },
  {
    dni: "80035874",
    nombre: "JESUS MARCELINO HUAMANI LOPEZ",
    deuda: 10089.38,
    origen: "BANCO FALABELLA",
    oferta: 3481.05,
    monto_cancelacion: 3027
  },
  {
    dni: "80122964",
    nombre: "SALAZAR VINCULA HUMBERTO FERNANDO",
    deuda: 3546.8500000000004,
    origen: "BANCO FALABELLA",
    oferta: 1223.6,
    monto_cancelacion: 1064
  },
  {
    dni: "80256160",
    nombre: "PABLO PAZ QUISPE",
    deuda: 38657.54,
    origen: "INTERBANK",
    oferta: 13336.55,
    monto_cancelacion: 11597
  },
  {
    dni: "80273656",
    nombre: "ABEL JOEL LUNA TIBURCIO",
    deuda: 11939.68,
    origen: "BANCO FALABELLA",
    oferta: 4119.3,
    monto_cancelacion: 3582
  },
  {
    dni: "80277087",
    nombre: "CHOY DIONICIO ISABEL MARIA",
    deuda: 18136.96,
    origen: "INTERBANK",
    oferta: 6257.15,
    monto_cancelacion: 5441
  },
  {
    dni: "80281619",
    nombre: "JOSE ANTONIO SALINAS ASCURRA",
    deuda: 2512.84,
    origen: "BANCO FALABELLA",
    oferta: 867.1,
    monto_cancelacion: 754
  },
  {
    dni: "80296439",
    nombre: "PRISCILA ESTHER MANCHEGO MORALES",
    deuda: 1120.57,
    origen: "BANCO FALABELLA",
    oferta: 386.4,
    monto_cancelacion: 336
  },
  {
    dni: "80328594",
    nombre: "MIRIAM BELLODAS MONTENEGRO",
    deuda: 1129.7,
    origen: "BANCO FALABELLA",
    oferta: 389.85,
    monto_cancelacion: 339
  },
  {
    dni: "80387277",
    nombre: "HUGO MARCOS CHOQUEPATA PELINCO",
    deuda: 10798.9,
    origen: "BANCO FALABELLA",
    oferta: 3726.0,
    monto_cancelacion: 3240
  },
  {
    dni: "80458669",
    nombre: "CERNA BARROSO CLAUDIA VIOLETA",
    deuda: 3185.12,
    origen: "BANCO FALABELLA",
    oferta: 1099.4,
    monto_cancelacion: 956
  },
  {
    dni: "80517149",
    nombre: "NEL ROMEL MIRAVAL PIZARRO",
    deuda: 2637.73,
    origen: "BANCO FALABELLA",
    oferta: 909.65,
    monto_cancelacion: 791
  },
  {
    dni: "80544949",
    nombre: "RIVERA JUAREZ JULIO WALTER",
    deuda: 2639.0,
    origen: "RIPLEY",
    oferta: 910.8,
    monto_cancelacion: 792
  },
  {
    dni: "80549910",
    nombre: "LUZ VICTORIA TIQUILLAHUANCA TANTARICO",
    deuda: 4037.5,
    origen: "BANCO FALABELLA",
    oferta: 1392.65,
    monto_cancelacion: 1211
  },
  {
    dni: "80555675",
    nombre: "CARLOS ALBERTO ARDAYA PANDURO",
    deuda: 1501.58,
    origen: "BANCO FALABELLA",
    oferta: 517.5,
    monto_cancelacion: 450
  },
  {
    dni: "80593716",
    nombre: "MOSTORINO RODRIGUEZ PEDRO WILMER",
    deuda: 7321.07,
    origen: "RIPLEY",
    oferta: 2525.4,
    monto_cancelacion: 2196
  },
  {
    dni: "80601086",
    nombre: "ECHEVARRIA VASQUEZ EBER GEWER",
    deuda: 2617.22,
    origen: "RIPLEY",
    oferta: 902.75,
    monto_cancelacion: 785
  },
  {
    dni: "80652226",
    nombre: "MARISOL STEFANNY ORTIZ VARGAS",
    deuda: 19275.15,
    origen: "BANCO FALABELLA",
    oferta: 6650.45,
    monto_cancelacion: 5783
  },
  {
    dni: "80657906",
    nombre: "ROCIO ELENA REATEGUI CANELOS",
    deuda: 5971.55,
    origen: "BANCO FALABELLA",
    oferta: 2059.65,
    monto_cancelacion: 1791
  },
  {
    dni: "79514",
    nombre: "CARLOS MANUEL CHUQUIPIONDO HUANIO",
    deuda: 1993.11,
    origen: "BANCO FALABELLA",
    oferta: 687.7,
    monto_cancelacion: 598
  },
  {
    dni: "2794506",
    nombre: "JOSE CIRO PINGO GARCIA",
    deuda: 11089.22,
    origen: "BANCO FALABELLA",
    oferta: 3826.05,
    monto_cancelacion: 3327
  },
  {
    dni: "6764687",
    nombre: "SULI MARGARITA SANTISTEBAN SALAS",
    deuda: 17599.75,
    origen: "BANCO FALABELLA",
    oferta: 6072.0,
    monto_cancelacion: 5280
  },
  {
    dni: "8983269",
    nombre: "AYOQUE LUNA DE ZEVALLOS MAGDALENA ISABEL",
    deuda: 7682.4800000000005,
    origen: "MIBANCO",
    oferta: 2650.75,
    monto_cancelacion: 2305
  },
  {
    dni: "9329427",
    nombre: "JAKELINE MALLMA CAMARENA",
    deuda: 8072.26,
    origen: "BANCO FALABELLA",
    oferta: 2785.3,
    monto_cancelacion: 2422
  },
  {
    dni: "9652860",
    nombre: "JUAN MANUEL CARPIO CASTILLO",
    deuda: 1874.84,
    origen: "BANCO FALABELLA",
    oferta: 646.3,
    monto_cancelacion: 562
  },
  {
    dni: "9686813",
    nombre: "SERGIO MARCIAL CRUZ GALVEZ",
    deuda: 12045.98,
    origen: "BANCO FALABELLA",
    oferta: 4156.1,
    monto_cancelacion: 3614
  },
  {
    dni: "9687030",
    nombre: "NIEVES DAMASO MONICA MARLENE",
    deuda: 1671.42,
    origen: "MIBANCO",
    oferta: 576.15,
    monto_cancelacion: 501
  },
  {
    dni: "9827845",
    nombre: "ROLANDO ESCUDERO MARIN",
    deuda: 2159.04,
    origen: "BANCO FALABELLA",
    oferta: 745.2,
    monto_cancelacion: 648
  },
  {
    dni: "9983711",
    nombre: "JESUS ANGEL QUINCHA SOSA",
    deuda: 1494.75,
    origen: "BANCO FALABELLA",
    oferta: 515.2,
    monto_cancelacion: 448
  },
  {
    dni: "10387197",
    nombre: "PAREDES FLORES MANUEL SANTOS",
    deuda: 24447.54,
    origen: "INTERBANK",
    oferta: 8434.1,
    monto_cancelacion: 7334
  },
  {
    dni: "10739381",
    nombre: "MARIO DAVID MORALES CASQUI",
    deuda: 22734.04,
    origen: "BANCO FALABELLA",
    oferta: 7843.0,
    monto_cancelacion: 6820
  },
  {
    dni: "16474908",
    nombre: "JUAN CARLOS MARQUEZ AMENERO",
    deuda: 25150.13,
    origen: "BANCO FALABELLA",
    oferta: 8676.75,
    monto_cancelacion: 7545
  },
  {
    dni: "16568828",
    nombre: "VICTOR ANTONIO ROJAS BRICEÐO",
    deuda: 56633.97,
    origen: "BANCO FALABELLA",
    oferta: 19538.5,
    monto_cancelacion: 16990
  },
  {
    dni: "16715478",
    nombre: "GUERRERO FRIAS LUIS ROLANDO",
    deuda: 4202.16,
    origen: "BANCO FALABELLA",
    oferta: 1450.15,
    monto_cancelacion: 1261
  },
  {
    dni: "17620038",
    nombre: "RAMOS RAMOS HECTOR ALBERTO",
    deuda: 6178.21,
    origen: "BCP",
    oferta: 2130.95,
    monto_cancelacion: 1853
  },
  {
    dni: "17964219",
    nombre: "ARANDA RIOS RUFINO ERMITA�O",
    deuda: 11407.130000000001,
    origen: "MIBANCO",
    oferta: 3935.3,
    monto_cancelacion: 3422
  },
  {
    dni: "18090051",
    nombre: "PELAEZ DE CASTILLO ROSA MARIA",
    deuda: 30528.850000000002,
    origen: "BANCO FALABELLA",
    oferta: 10532.85,
    monto_cancelacion: 9159
  },
  {
    dni: "19334217",
    nombre: "WILLIAMS DAVID ATALAYA VILLEGAS",
    deuda: 9846.38,
    origen: "BANCO FALABELLA",
    oferta: 3397.1,
    monto_cancelacion: 2954
  },
  {
    dni: "21819986",
    nombre: "JOSE CARBAJAL PACHAS",
    deuda: 1513.45,
    origen: "BANCO FALABELLA",
    oferta: 522.1,
    monto_cancelacion: 454
  },
  {
    dni: "22499228",
    nombre: "JUAN CARLOS MEDINA SALDAÐA",
    deuda: 15933.26,
    origen: "BANCO FALABELLA",
    oferta: 5497.0,
    monto_cancelacion: 4780
  },
  {
    dni: "25787539",
    nombre: "VILLARREAL CERMEÑO GUSTAVO WILFREDO",
    deuda: 2748.95,
    origen: "RIPLEY",
    oferta: 948.75,
    monto_cancelacion: 825
  },
  {
    dni: "29388770",
    nombre: "JUANA BEATRIZ PRESBITERO CARAZAS",
    deuda: 19323.94,
    origen: "BANCO FALABELLA",
    oferta: 6666.55,
    monto_cancelacion: 5797
  },
  {
    dni: "32973511",
    nombre: "ROSA ELVIRA ARMESTAR CARRASCO",
    deuda: 1058.13,
    origen: "BANCO FALABELLA",
    oferta: 364.55,
    monto_cancelacion: 317
  },
  {
    dni: "33262314",
    nombre: "CASTILLO UCAÑAN JORGE ADRIAN",
    deuda: 1613.44,
    origen: "RIPLEY",
    oferta: 556.6,
    monto_cancelacion: 484
  },
  {
    dni: "40004290",
    nombre: "JUAN CARLOS VALENCIA GUTIERREZ",
    deuda: 2621.74,
    origen: "BANCO FALABELLA",
    oferta: 905.05,
    monto_cancelacion: 787
  },
  {
    dni: "40278995",
    nombre: "LIDIA CAROLA CHAVEZ CHANCAFE",
    deuda: 1548.01,
    origen: "BANCO FALABELLA",
    oferta: 533.6,
    monto_cancelacion: 464
  },
  {
    dni: "40430207",
    nombre: "CHALCO HUAMANI LUIS ENRIQUE",
    deuda: 3244.04,
    origen: "RIPLEY",
    oferta: 1118.95,
    monto_cancelacion: 973
  },
  {
    dni: "40573093",
    nombre: "VALERIA EUGENIA PINILLOS RODRIGUEZ",
    deuda: 7697.84,
    origen: "BANCO FALABELLA",
    oferta: 2655.35,
    monto_cancelacion: 2309
  },
  {
    dni: "40651786",
    nombre: "JHIM PAUL PRINCIPE NAVARRO",
    deuda: 4994.74,
    origen: "BANCO FALABELLA",
    oferta: 1722.7,
    monto_cancelacion: 1498
  },
  {
    dni: "40784951",
    nombre: "ROBLES BRUNO EDGAR WILIAMS",
    deuda: 20302.22,
    origen: "INTERBANK",
    oferta: 7004.65,
    monto_cancelacion: 6091
  },
  {
    dni: "41128576",
    nombre: "JORGE HUMBERTO ABAD DIOSES",
    deuda: 9880.72,
    origen: "BANCO FALABELLA",
    oferta: 3408.6,
    monto_cancelacion: 2964
  },
  {
    dni: "41202105",
    nombre: "VANESA ROXANA CASTILLO RIVADENEYRA",
    deuda: 13220.18,
    origen: "BANCO FALABELLA",
    oferta: 4560.9,
    monto_cancelacion: 3966
  },
  {
    dni: "41245577",
    nombre: "VICTOR ALEXANDER CAPIA QUISPE",
    deuda: 1444.07,
    origen: "BANCO FALABELLA",
    oferta: 497.95,
    monto_cancelacion: 433
  },
  {
    dni: "41435762",
    nombre: "CAYNAMARKS SANCHEZ MARCO ANTONIO",
    deuda: 2826.0699999999997,
    origen: "MIBANCO",
    oferta: 975.2,
    monto_cancelacion: 848
  },
  {
    dni: "41451887",
    nombre: "RUDY ERASMO QUISPE QUISPE",
    deuda: 9623.13,
    origen: "BANCO FALABELLA",
    oferta: 3320.05,
    monto_cancelacion: 2887
  },
  {
    dni: "42089142",
    nombre: "HANSEN VICKIE GUERRA DIAZ",
    deuda: 1322.67,
    origen: "BANCO FALABELLA",
    oferta: 456.55,
    monto_cancelacion: 397
  },
  {
    dni: "42593734",
    nombre: "MILAGRITOS CAJUSOL VALDERA",
    deuda: 1946.39,
    origen: "BANCO FALABELLA",
    oferta: 671.6,
    monto_cancelacion: 584
  },
  {
    dni: "42781351",
    nombre: "YOLVI JESSICA ACUÐA BAUTISTA",
    deuda: 1059.76,
    origen: "BANCO FALABELLA",
    oferta: 365.7,
    monto_cancelacion: 318
  },
  {
    dni: "42946915",
    nombre: "DEYVI YOVANI YNOSTROZA DELGADO",
    deuda: 6689.19,
    origen: "BANCO FALABELLA",
    oferta: 2308.05,
    monto_cancelacion: 2007
  },
  {
    dni: "43008017",
    nombre: "ELIZABETH HAYDEE SUSANIVAR YAURI",
    deuda: 7081.98,
    origen: "BANCO FALABELLA",
    oferta: 2443.75,
    monto_cancelacion: 2125
  },
  {
    dni: "43757666",
    nombre: "SERRANO RAMIREZ JONATHAN ALEXANDER",
    deuda: 1343.27,
    origen: "BANCO FALABELLA",
    oferta: 463.45,
    monto_cancelacion: 403
  },
  {
    dni: "43950427",
    nombre: "VALENCIA SUYON ISRRAEL",
    deuda: 15323.61,
    origen: "INTERBANK",
    oferta: 5286.55,
    monto_cancelacion: 4597
  },
  {
    dni: "43986316",
    nombre: "ROBERTO EFRAIN CASTRO SANCHEZ",
    deuda: 1504.9,
    origen: "BANCO FALABELLA",
    oferta: 518.65,
    monto_cancelacion: 451
  },
  {
    dni: "44239435",
    nombre: "POOL RONALD BALLENA ÐOPO",
    deuda: 1334.33,
    origen: "BANCO FALABELLA",
    oferta: 460.0,
    monto_cancelacion: 400
  },
  {
    dni: "44246738",
    nombre: "GUBER DOMINGO TORRES PALOMARES",
    deuda: 2538.09,
    origen: "BANCO FALABELLA",
    oferta: 875.15,
    monto_cancelacion: 761
  },
  {
    dni: "44259782",
    nombre: "VICTOR RAUL CUYUTUPA PEREDA",
    deuda: 1138.56,
    origen: "BANCO FALABELLA",
    oferta: 393.3,
    monto_cancelacion: 342
  },
  {
    dni: "44265899",
    nombre: "DEYSI AQUINO CHERO",
    deuda: 2420.97,
    origen: "BANCO FALABELLA",
    oferta: 834.9,
    monto_cancelacion: 726
  },
  {
    dni: "44894549",
    nombre: "HORMECINDA CIEZA RAMOS",
    deuda: 5468.49,
    origen: "BANCO FALABELLA",
    oferta: 1887.15,
    monto_cancelacion: 1641
  },
  {
    dni: "44994515",
    nombre: "ROY SORIANO PINEDO",
    deuda: 1188.46,
    origen: "BANCO FALABELLA",
    oferta: 410.55,
    monto_cancelacion: 357
  },
  {
    dni: "44998834",
    nombre: "RUBIO NOLAZCO HECTOR GIUSEPH",
    deuda: 1036.75,
    origen: "BANCO FALABELLA",
    oferta: 357.65,
    monto_cancelacion: 311
  },
  {
    dni: "45147153",
    nombre: "ORELLANA SOLIS GONZALO",
    deuda: 5408.23,
    origen: "RIPLEY",
    oferta: 1865.3,
    monto_cancelacion: 1622
  },
  {
    dni: "45425710",
    nombre: "MARTHA SARAI PONCE SANCHEZ",
    deuda: 10157.55,
    origen: "BANCO FALABELLA",
    oferta: 3504.05,
    monto_cancelacion: 3047
  },
  {
    dni: "45601201",
    nombre: "CLAUDIA MAYRA ANDREA PASTOR ACOSTA",
    deuda: 6306.12,
    origen: "BANCO FALABELLA",
    oferta: 2175.8,
    monto_cancelacion: 1892
  },
  {
    dni: "45948554",
    nombre: "ROBERTO VIDAL REYNA VILLALOBOS",
    deuda: 6387.92,
    origen: "BCP",
    oferta: 2203.4,
    monto_cancelacion: 1916
  },
  {
    dni: "46236137",
    nombre: "QUINTERO SICHA ROSMERY",
    deuda: 10639.05,
    origen: "RIPLEY",
    oferta: 3670.8,
    monto_cancelacion: 3192
  },
  {
    dni: "46311123",
    nombre: "BICENTE GONZALES SAJAMI",
    deuda: 1159.85,
    origen: "BANCO FALABELLA",
    oferta: 400.2,
    monto_cancelacion: 348
  },
  {
    dni: "46369214",
    nombre: "GUILLERMO RENEE HUARI GALVEZ",
    deuda: 1205.18,
    origen: "BANCO FALABELLA",
    oferta: 416.3,
    monto_cancelacion: 362
  },
  {
    dni: "46538765",
    nombre: "ALADINO ELEYSER CUSTODIO PEREDA",
    deuda: 1520.03,
    origen: "BANCO FALABELLA",
    oferta: 524.4,
    monto_cancelacion: 456
  },
  {
    dni: "46801481",
    nombre: "WILSON ARIMUYA LLUCEMA",
    deuda: 1322.78,
    origen: "BANCO FALABELLA",
    oferta: 456.55,
    monto_cancelacion: 397
  },
  {
    dni: "46841101",
    nombre: "LUIS EDUARDO CRUZ CRUZ",
    deuda: 8679.83,
    origen: "BANCO FALABELLA",
    oferta: 2994.6,
    monto_cancelacion: 2604
  },
  {
    dni: "47673571",
    nombre: "MAURICIO SOLIS RIVAS",
    deuda: 1487.92,
    origen: "BANCO FALABELLA",
    oferta: 512.9,
    monto_cancelacion: 446
  },
  {
    dni: "48208544",
    nombre: "GUERRERO MAURO MANUEL RUIZ CONEJO",
    deuda: 1240.89,
    origen: "BANCO FALABELLA",
    oferta: 427.8,
    monto_cancelacion: 372
  },
  {
    dni: "80584391",
    nombre: "ANGELA CECILIA MARCOS MARCOS",
    deuda: 4654.32,
    origen: "BCP",
    oferta: 1605.4,
    monto_cancelacion: 1396
  },
  {
    dni: "86440",
    nombre: "ROBALINO ESPINAR FRANCISCO",
    deuda: 1126.13,
    origen: "RIPLEY",
    oferta: 388.7,
    monto_cancelacion: 338
  },
  {
    dni: "1556596",
    nombre: "TERRONES DE LA ROSA MARIA ALEJANDRINA",
    deuda: 7972.7300000000005,
    origen: "RIPLEY",
    oferta: 2750.8,
    monto_cancelacion: 2392
  },
  {
    dni: "2671354",
    nombre: "REQUENA JESUS PURIZACA",
    deuda: 13087.04,
    origen: "BANCO FALABELLA",
    oferta: 4514.9,
    monto_cancelacion: 3926
  },
  {
    dni: "2792139",
    nombre: "JOSE VITE IBARRA",
    deuda: 26795.08,
    origen: "BANCO FALABELLA",
    oferta: 9244.85,
    monto_cancelacion: 8039
  },
  {
    dni: "2824104",
    nombre: "MACHACA ALFARO CESAR AUGUSTO",
    deuda: 12905.45,
    origen: "BCP",
    oferta: 4452.8,
    monto_cancelacion: 3872
  },
  {
    dni: "2833329",
    nombre: "OSWALDO WILFREDO OJEDA BECERRA",
    deuda: 1055.72,
    origen: "BANCO FALABELLA",
    oferta: 364.55,
    monto_cancelacion: 317
  },
  {
    dni: "3236553",
    nombre: "ANGEL IGNACIO LABAN VILLEGAS",
    deuda: 13192.61,
    origen: "BANCO FALABELLA",
    oferta: 4551.7,
    monto_cancelacion: 3958
  },
  {
    dni: "3300467",
    nombre: "PALOMINO VALDEZ GERARDO",
    deuda: 4156.91,
    origen: "MIBANCO",
    oferta: 1434.05,
    monto_cancelacion: 1247
  },
  {
    dni: "3503665",
    nombre: "EDGAR ZURITA ALBUJAR",
    deuda: 29426.31,
    origen: "BANCO FALABELLA",
    oferta: 10152.2,
    monto_cancelacion: 8828
  },
  {
    dni: "3575743",
    nombre: "FLORINDA CORTEZ BENITES",
    deuda: 9816.68,
    origen: "INTERBANK",
    oferta: 3386.75,
    monto_cancelacion: 2945
  },
  {
    dni: "3848903",
    nombre: "ENRIQUE JAVIER CHANGANAQUI SILVA",
    deuda: 33033.25,
    origen: "BANCO FALABELLA",
    oferta: 11396.5,
    monto_cancelacion: 9910
  },
  {
    dni: "6075424",
    nombre: "ANDRES AUGUSTO ALVAREZ APONTE",
    deuda: 1920.73,
    origen: "BANCO FALABELLA",
    oferta: 662.4,
    monto_cancelacion: 576
  },
  {
    dni: "6171174",
    nombre: "LUIS ALBERTO QUISPE BAUTISTA",
    deuda: 7074.34,
    origen: "BANCO FALABELLA",
    oferta: 2440.3,
    monto_cancelacion: 2122
  },
  {
    dni: "6755766",
    nombre: "ROLANDO VENTURA ZENTENO",
    deuda: 13746.23,
    origen: "BANCO FALABELLA",
    oferta: 4742.6,
    monto_cancelacion: 4124
  },
  {
    dni: "7636501",
    nombre: "RODOLFO VALENTINO AMANQUI ZEA",
    deuda: 12584.7,
    origen: "BANCO FALABELLA",
    oferta: 4341.25,
    monto_cancelacion: 3775
  },
  {
    dni: "7995304",
    nombre: "ANA IRENE RISCO REYES",
    deuda: 6963.22,
    origen: "BANCO FALABELLA",
    oferta: 2402.35,
    monto_cancelacion: 2089
  },
  {
    dni: "8173033",
    nombre: "CRESENCIO QUEZADA CUSTODIO",
    deuda: 7997.88,
    origen: "BANCO FALABELLA",
    oferta: 2758.85,
    monto_cancelacion: 2399
  },
  {
    dni: "8652410",
    nombre: "HUAMAN GALVEZ NICOLAS",
    deuda: 11472.68,
    origen: "RIPLEY",
    oferta: 3958.3,
    monto_cancelacion: 3442
  },
  {
    dni: "8663855",
    nombre: "JOSE FRANCISCO RICRA SOTO",
    deuda: 97261.51999999999,
    origen: "BANCO FALABELLA",
    oferta: 33554.7,
    monto_cancelacion: 29178
  },
  {
    dni: "8803031",
    nombre: "GHIO NAPURI CESAR RICARDO ALBERTO",
    deuda: 39964.27,
    origen: "INTERBANK",
    oferta: 13787.35,
    monto_cancelacion: 11989
  },
  {
    dni: "9363923",
    nombre: "ALCIDES RODRIGUEZ VILLAGARAY",
    deuda: 19793.28,
    origen: "BANCO FALABELLA",
    oferta: 6828.7,
    monto_cancelacion: 5938
  },
  {
    dni: "9440915",
    nombre: "WUILLIAMS RUSI ARIAS VENTOCILLA",
    deuda: 21339.62,
    origen: "BANCO FALABELLA",
    oferta: 7362.3,
    monto_cancelacion: 6402
  },
  {
    dni: "9448588",
    nombre: "MARIA LUISA MEDEROS DOMINGUEZ",
    deuda: 3065.25,
    origen: "BANCO FALABELLA",
    oferta: 1058.0,
    monto_cancelacion: 920
  },
  {
    dni: "9524042",
    nombre: "MARTHA ISELA CHAPIAMA PALOMINO",
    deuda: 4271.39,
    origen: "BANCO FALABELLA",
    oferta: 1473.15,
    monto_cancelacion: 1281
  },
  {
    dni: "9576847",
    nombre: "TELMO MANUEL DEZA DIAZ",
    deuda: 6997.19,
    origen: "BANCO FALABELLA",
    oferta: 2413.85,
    monto_cancelacion: 2099
  },
  {
    dni: "9606827",
    nombre: "PERCY POZO GARCIA",
    deuda: 1035.29,
    origen: "BANCO FALABELLA",
    oferta: 357.65,
    monto_cancelacion: 311
  },
  {
    dni: "9627358",
    nombre: "MUGABURU IBARRA GERSON ROBERTO",
    deuda: 14866.45,
    origen: "INTERBANK",
    oferta: 5129.0,
    monto_cancelacion: 4460
  },
  {
    dni: "9698875",
    nombre: "EFRAIN LOPEZ DE LA CRUZ",
    deuda: 1997.3,
    origen: "BANCO FALABELLA",
    oferta: 688.85,
    monto_cancelacion: 599
  },
  {
    dni: "9701804",
    nombre: "JOEL ADELINO GUTIERREZ HUAMANI",
    deuda: 5620.11,
    origen: "BANCO FALABELLA",
    oferta: 1938.9,
    monto_cancelacion: 1686
  },
  {
    dni: "9783964",
    nombre: "ANDERSON MORLEY ROMAN REYNOSO",
    deuda: 1081.6,
    origen: "BANCO FALABELLA",
    oferta: 372.6,
    monto_cancelacion: 324
  },
  {
    dni: "9797899",
    nombre: "ALEJANDRO JAVIER SAMAME RAMOS",
    deuda: 1562.48,
    origen: "BANCO FALABELLA",
    oferta: 539.35,
    monto_cancelacion: 469
  },
  {
    dni: "9807413",
    nombre: "PUMA VIVEROS MARGOD",
    deuda: 7377.639999999999,
    origen: "RIPLEY",
    oferta: 2544.95,
    monto_cancelacion: 2213
  },
  {
    dni: "9905993",
    nombre: "CARLOS OSWALDO MANRIQUE GARCIA",
    deuda: 1709.34,
    origen: "BANCO FALABELLA",
    oferta: 589.95,
    monto_cancelacion: 513
  },
  {
    dni: "10177059",
    nombre: "GABRIELA ISABEL CONDORI LOLO",
    deuda: 4878.52,
    origen: "BANCO FALABELLA",
    oferta: 1683.6,
    monto_cancelacion: 1464
  },
  {
    dni: "10251144",
    nombre: "MARCHAN SONO NOELIA ROCIO",
    deuda: 7460.01,
    origen: "RIPLEY",
    oferta: 2573.7,
    monto_cancelacion: 2238
  },
  {
    dni: "10385137",
    nombre: "SALAZAR RODRIGUEZ SONIA ELIZABETH",
    deuda: 17991.89,
    origen: "BANCO FALABELLA",
    oferta: 6207.7,
    monto_cancelacion: 5398
  },
  {
    dni: "10462157",
    nombre: "ALEXANDER GORBEÐA RUIZ",
    deuda: 33268.2,
    origen: "BANCO FALABELLA",
    oferta: 11477.0,
    monto_cancelacion: 9980
  },
  {
    dni: "10563168",
    nombre: "JULIO MARINO VELARDE VASQUEZ",
    deuda: 21817.32,
    origen: "BANCO FALABELLA",
    oferta: 7526.75,
    monto_cancelacion: 6545
  },
  {
    dni: "10690044",
    nombre: "SAUCEDO MALDONADO KAREN MELISSA",
    deuda: 28455.43,
    origen: "BANCO FALABELLA",
    oferta: 9817.55,
    monto_cancelacion: 8537
  },
  {
    dni: "10816719",
    nombre: "SALAS VIVAR CESAR ALBERTO",
    deuda: 16834.38,
    origen: "BANCO FALABELLA",
    oferta: 5807.5,
    monto_cancelacion: 5050
  },
  {
    dni: "10874290",
    nombre: "MARIO CANCHARI DAMAS",
    deuda: 4258.64,
    origen: "BCP",
    oferta: 1469.7,
    monto_cancelacion: 1278
  },
  {
    dni: "15438941",
    nombre: "CAMPOS VICENTE CARLOS ANDRES",
    deuda: 21424.52,
    origen: "INTERBANK",
    oferta: 7391.05,
    monto_cancelacion: 6427
  },
  {
    dni: "16618730",
    nombre: "LUIS ANTONIO SANTAMARIA SERREPE",
    deuda: 12784.29,
    origen: "BANCO FALABELLA",
    oferta: 4410.25,
    monto_cancelacion: 3835
  },
  {
    dni: "16635727",
    nombre: "ALAMAS NAMUCHE JOSE",
    deuda: 3509.83,
    origen: "RIPLEY",
    oferta: 1210.95,
    monto_cancelacion: 1053
  },
  {
    dni: "16782178",
    nombre: "JIMMY CARLOS GARCES COCHAS",
    deuda: 7685.3,
    origen: "BANCO FALABELLA",
    oferta: 2651.9,
    monto_cancelacion: 2306
  },
  {
    dni: "16792570",
    nombre: "MANUEL NEISER DIAZ DIAZ",
    deuda: 2425.5,
    origen: "BANCO FALABELLA",
    oferta: 837.2,
    monto_cancelacion: 728
  },
  {
    dni: "17452365",
    nombre: "CRUZ RICARDO ALEX ALARCON SANTA",
    deuda: 42475.99,
    origen: "BANCO FALABELLA",
    oferta: 14654.45,
    monto_cancelacion: 12743
  },
  {
    dni: "17894552",
    nombre: "MARIN ARMAS JORGE LUIS",
    deuda: 2735.87,
    origen: "BANCO FALABELLA",
    oferta: 944.15,
    monto_cancelacion: 821
  },
  {
    dni: "17933125",
    nombre: "JULIO CESAR VERGARA GAMARRA",
    deuda: 17950.76,
    origen: "BANCO FALABELLA",
    oferta: 6192.75,
    monto_cancelacion: 5385
  },
  {
    dni: "18011063",
    nombre: "ROXANA ELENA FIGUEROA TRONCOSO",
    deuda: 39164.01,
    origen: "BANCO FALABELLA",
    oferta: 13511.35,
    monto_cancelacion: 11749
  },
  {
    dni: "18081585",
    nombre: "FLOR MARIA ANGULO TUANAMA",
    deuda: 17904.59,
    origen: "BANCO FALABELLA",
    oferta: 6176.65,
    monto_cancelacion: 5371
  },
  {
    dni: "18142869",
    nombre: "HUMBERTO EUSEBIO BELTRAN FLORES",
    deuda: 10869.89,
    origen: "BANCO FALABELLA",
    oferta: 3750.15,
    monto_cancelacion: 3261
  },
  {
    dni: "18163684",
    nombre: "BELINDA FLORES SANTOS",
    deuda: 7447.68,
    origen: "BANCO FALABELLA",
    oferta: 2569.1,
    monto_cancelacion: 2234
  },
  {
    dni: "19237638",
    nombre: "ARTURO ALEJANDRO CHAVEZ SISNIEGAS",
    deuda: 1240.01,
    origen: "BANCO FALABELLA",
    oferta: 427.8,
    monto_cancelacion: 372
  },
  {
    dni: "19337334",
    nombre: "JOSE GERARDO QUITO VASQUEZ",
    deuda: 8930.83,
    origen: "BANCO FALABELLA",
    oferta: 3080.85,
    monto_cancelacion: 2679
  },
  {
    dni: "19810518",
    nombre: "SAAVEDRA RUIZ RUSEL",
    deuda: 28157.06,
    origen: "INTERBANK",
    oferta: 9714.05,
    monto_cancelacion: 8447
  },
  {
    dni: "19887021",
    nombre: "MAXIMO GERMAN ZAVALA CARDENAS",
    deuda: 20920.76,
    origen: "BANCO FALABELLA",
    oferta: 7217.4,
    monto_cancelacion: 6276
  },
  {
    dni: "20891701",
    nombre: "FERNANDO WILFREDO CAPCHA CASTRO",
    deuda: 17021.73,
    origen: "BANCO FALABELLA",
    oferta: 5873.05,
    monto_cancelacion: 5107
  },
  {
    dni: "21529476",
    nombre: "CHILET BONIFAZ JULIO CESAR",
    deuda: 25625.47,
    origen: "BCP",
    oferta: 8841.2,
    monto_cancelacion: 7688
  },
  {
    dni: "21549154",
    nombre: "PERCY CCOILLO ENCISO",
    deuda: 3479.46,
    origen: "BANCO FALABELLA",
    oferta: 1200.6,
    monto_cancelacion: 1044
  },
  {
    dni: "21575409",
    nombre: "YESSICA CECILIA MUÐOZ GARCIA",
    deuda: 11188.43,
    origen: "BANCO FALABELLA",
    oferta: 3860.55,
    monto_cancelacion: 3357
  },
  {
    dni: "22500262",
    nombre: "ROMULO CABRERA MONTALVO",
    deuda: 5546.68,
    origen: "BANCO FALABELLA",
    oferta: 1913.6,
    monto_cancelacion: 1664
  },
  {
    dni: "23020869",
    nombre: "DORA VERONICA GARCIA VALDIVIESO",
    deuda: 44819.479999999996,
    origen: "INTERBANK",
    oferta: 15462.9,
    monto_cancelacion: 13446
  },
  {
    dni: "23919288",
    nombre: "MIRANDA CCALLO JACINTO",
    deuda: 1286.3700000000001,
    origen: "MIBANCO",
    oferta: 443.9,
    monto_cancelacion: 386
  },
  {
    dni: "25571203",
    nombre: "MEJIA PUESCAS EMMA VICTORIA",
    deuda: 22338.04,
    origen: "BANCO FALABELLA",
    oferta: 7706.15,
    monto_cancelacion: 6701
  },
  {
    dni: "25714386",
    nombre: "ROSSANA NATALIA CROVETTO CHUNA",
    deuda: 1010.18,
    origen: "BANCO FALABELLA",
    oferta: 348.45,
    monto_cancelacion: 303
  },
  {
    dni: "25730942",
    nombre: "LUZ ANGELICA RAMOS VARGAS",
    deuda: 14493.8,
    origen: "BANCO FALABELLA",
    oferta: 5000.2,
    monto_cancelacion: 4348
  },
  {
    dni: "25767968",
    nombre: "DONATILA CIPRIANO MAURICIO",
    deuda: 1900.54,
    origen: "BANCO FALABELLA",
    oferta: 655.5,
    monto_cancelacion: 570
  },
  {
    dni: "25786318",
    nombre: "MASIAS EDDIE VELA ROMERO",
    deuda: 1009.75,
    origen: "BANCO FALABELLA",
    oferta: 348.45,
    monto_cancelacion: 303
  },
  {
    dni: "26674727",
    nombre: "DANTE ALVARADO MIRANDA",
    deuda: 2328.44,
    origen: "BANCO FALABELLA",
    oferta: 803.85,
    monto_cancelacion: 699
  },
  {
    dni: "26715810",
    nombre: "ARTURO CHAVEZ FLORES",
    deuda: 7775.05,
    origen: "BANCO FALABELLA",
    oferta: 2682.95,
    monto_cancelacion: 2333
  },
  {
    dni: "26719475",
    nombre: "WILMER SANCHEZ SANCHEZ",
    deuda: 14600.9,
    origen: "BANCO FALABELLA",
    oferta: 5037.0,
    monto_cancelacion: 4380
  },
  {
    dni: "27665756",
    nombre: "CESAR EVERGISTO ESCARATE SEMINARIO",
    deuda: 115490.04000000001,
    origen: "INTERBANK",
    oferta: 39844.05,
    monto_cancelacion: 34647
  },
  {
    dni: "29581764",
    nombre: "JULIO CESAR CHAVEZ PALACIOS",
    deuda: 10178.6,
    origen: "BANCO FALABELLA",
    oferta: 3512.1,
    monto_cancelacion: 3054
  },
  {
    dni: "29582102",
    nombre: "JOSE ADHEMIR VILLANUEVA PONCE",
    deuda: 2314.31,
    origen: "BANCO FALABELLA",
    oferta: 798.1,
    monto_cancelacion: 694
  },
  {
    dni: "29591878",
    nombre: "JESSENIA SARA MILAGROS SARA CARBAJAL MONROY",
    deuda: 11205.76,
    origen: "BANCO FALABELLA",
    oferta: 3866.3,
    monto_cancelacion: 3362
  },
  {
    dni: "29606344",
    nombre: "BEATRIZ CRISTINA APAZA SOSA",
    deuda: 1807.98,
    origen: "BANCO FALABELLA",
    oferta: 623.3,
    monto_cancelacion: 542
  },
  {
    dni: "29715706",
    nombre: "JOHN CARLOS CASTRO GARCIA",
    deuda: 17855.79,
    origen: "BANCO FALABELLA",
    oferta: 6160.55,
    monto_cancelacion: 5357
  },
  {
    dni: "32129476",
    nombre: "CARBAJAL FIGUEROA PASTORITA ROSA",
    deuda: 1583.46,
    origen: "BANCO FALABELLA",
    oferta: 546.25,
    monto_cancelacion: 475
  },
  {
    dni: "32137011",
    nombre: "ANAYA CHANG MILLER ARENCIO",
    deuda: 12949.25,
    origen: "INTERBANK",
    oferta: 4467.75,
    monto_cancelacion: 3885
  },
  {
    dni: "32388774",
    nombre: "DELIS ALEX LAURENCIO CIRILO",
    deuda: 1355.72,
    origen: "BANCO FALABELLA",
    oferta: 468.05,
    monto_cancelacion: 407
  },
  {
    dni: "32962654",
    nombre: "LUIS ALVARO CRUZ ARCE",
    deuda: 16499.19,
    origen: "BCP",
    oferta: 5692.5,
    monto_cancelacion: 4950
  },
  {
    dni: "33259652",
    nombre: "VILLALOBOS SEGURA MARIA BIRMANIA",
    deuda: 1980.27,
    origen: "RIPLEY",
    oferta: 683.1,
    monto_cancelacion: 594
  },
  {
    dni: "33263212",
    nombre: "URBANO ESPINOZA HENRY ANGEL",
    deuda: 1631.0,
    origen: "RIPLEY",
    oferta: 562.35,
    monto_cancelacion: 489
  },
  {
    dni: "33588603",
    nombre: "ODALIS ELISA HERRERA RIOS",
    deuda: 6258.47,
    origen: "BANCO FALABELLA",
    oferta: 2159.7,
    monto_cancelacion: 1878
  },
  {
    dni: "33663894",
    nombre: "ANDRES VILLEGAS VARGAS",
    deuda: 6815.15,
    origen: "BANCO FALABELLA",
    oferta: 2351.75,
    monto_cancelacion: 2045
  },
  {
    dni: "40036280",
    nombre: "GOMEZ ORTEGA ORLANDO HERMOGENES",
    deuda: 11677.664,
    origen: "BCP",
    oferta: 4028.45,
    monto_cancelacion: 3503
  },
  {
    dni: "40083455",
    nombre: "JOSE EUGENIO ORBEGOSO TASAYCO",
    deuda: 16852.78,
    origen: "BANCO FALABELLA",
    oferta: 5814.4,
    monto_cancelacion: 5056
  },
  {
    dni: "40109445",
    nombre: "CALDERON GUEVARA LUIS ALDO",
    deuda: 4913.24,
    origen: "RIPLEY",
    oferta: 1695.1,
    monto_cancelacion: 1474
  },
  {
    dni: "40171407",
    nombre: "PERCY ROGER SAAVEDRA SOTO",
    deuda: 8126.02,
    origen: "BANCO FALABELLA",
    oferta: 2803.7,
    monto_cancelacion: 2438
  },
  {
    dni: "40215586",
    nombre: "FERNANDO EDINSON NUÐEZ CAMACHO",
    deuda: 4779.99,
    origen: "BANCO FALABELLA",
    oferta: 1649.1,
    monto_cancelacion: 1434
  },
  {
    dni: "40298248",
    nombre: "LUISIANA RAFFAELLA ECHEGARAY POLANCO",
    deuda: 9644.21,
    origen: "BANCO FALABELLA",
    oferta: 3326.95,
    monto_cancelacion: 2893
  },
  {
    dni: "40298894",
    nombre: "MARCO ANTONIO MONTERO OTINIANO",
    deuda: 9638.310000000001,
    origen: "BCP",
    oferta: 3324.65,
    monto_cancelacion: 2891
  },
  {
    dni: "40381797",
    nombre: "JHORSON CROWER REYES DIAZ",
    deuda: 8708.75,
    origen: "BANCO FALABELLA",
    oferta: 3004.95,
    monto_cancelacion: 2613
  },
  {
    dni: "40410322",
    nombre: "MARIA MORMONTOY GARAYAR",
    deuda: 3273.65,
    origen: "BANCO FALABELLA",
    oferta: 1129.3,
    monto_cancelacion: 982
  },
  {
    dni: "40417398",
    nombre: "JOSUE EFRAIN GONZALES ROSAS",
    deuda: 1049.94,
    origen: "BANCO FALABELLA",
    oferta: 362.25,
    monto_cancelacion: 315
  },
  {
    dni: "40432358",
    nombre: "ANGELA LISSET GONZALES GALLARDO",
    deuda: 2824.34,
    origen: "BANCO FALABELLA",
    oferta: 974.05,
    monto_cancelacion: 847
  },
  {
    dni: "40491923",
    nombre: "YUCRA CUELA ALFREDO",
    deuda: 7540.01,
    origen: "BCP",
    oferta: 2601.3,
    monto_cancelacion: 2262
  },
  {
    dni: "40502170",
    nombre: "JUAN CARLOS SUAREZ MARTINEZ",
    deuda: 3819.36,
    origen: "BANCO FALABELLA",
    oferta: 1317.9,
    monto_cancelacion: 1146
  },
  {
    dni: "40620001",
    nombre: "CARMEN AMELIA TORO ALVAREZ",
    deuda: 11675.27,
    origen: "BANCO FALABELLA",
    oferta: 4028.45,
    monto_cancelacion: 3503
  },
  {
    dni: "40638080",
    nombre: "JACKELINE MARIZABEL RAMIREZ ENCISO",
    deuda: 14910.08,
    origen: "BANCO FALABELLA",
    oferta: 5143.95,
    monto_cancelacion: 4473
  },
  {
    dni: "40739241",
    nombre: "MILAGROS CONCEPCION PONCE CJUMO",
    deuda: 2912.9,
    origen: "BANCO FALABELLA",
    oferta: 1005.1,
    monto_cancelacion: 874
  },
  {
    dni: "40745614",
    nombre: "HERNAN TENAZOA REATEGUI",
    deuda: 1658.0,
    origen: "BANCO FALABELLA",
    oferta: 571.55,
    monto_cancelacion: 497
  },
  {
    dni: "40818183",
    nombre: "JORGE LAZO SANCHEZ",
    deuda: 6991.79,
    origen: "BCP",
    oferta: 2412.7,
    monto_cancelacion: 2098
  },
  {
    dni: "40888585",
    nombre: "LUIS ALBERTO CASTRO LIRA",
    deuda: 28275.68,
    origen: "BANCO FALABELLA",
    oferta: 9755.45,
    monto_cancelacion: 8483
  },
  {
    dni: "40923613",
    nombre: "LUIS FELIPE CAYCHO MONTOYA",
    deuda: 7278.09,
    origen: "BANCO FALABELLA",
    oferta: 2510.45,
    monto_cancelacion: 2183
  },
  {
    dni: "40947633",
    nombre: "FRANCISCO JAVIER QUISPE VEGA",
    deuda: 1034.02,
    origen: "BANCO FALABELLA",
    oferta: 356.5,
    monto_cancelacion: 310
  },
  {
    dni: "41038788",
    nombre: "MARINOS GONZALEZ ALEX RICHARD",
    deuda: 7675.43,
    origen: "BANCO FALABELLA",
    oferta: 2648.45,
    monto_cancelacion: 2303
  },
  {
    dni: "41053367",
    nombre: "JHONNY WILFREDO SANDOVAL LAMADRID",
    deuda: 14253.15,
    origen: "BANCO FALABELLA",
    oferta: 4917.4,
    monto_cancelacion: 4276
  },
  {
    dni: "41087657",
    nombre: "CAMPOSANO TAZA FELICITA",
    deuda: 37199.31,
    origen: "INTERBANK",
    oferta: 12834.0,
    monto_cancelacion: 11160
  },
  {
    dni: "41278183",
    nombre: "NORMA LETICIA ROACH VARGAS",
    deuda: 49129.03,
    origen: "BANCO FALABELLA",
    oferta: 16949.85,
    monto_cancelacion: 14739
  },
  {
    dni: "41408466",
    nombre: "SOLEDAD PATRICIA CHOQUEHUANCA MENACHO",
    deuda: 2934.21,
    origen: "BANCO FALABELLA",
    oferta: 1012.0,
    monto_cancelacion: 880
  },
  {
    dni: "41412470",
    nombre: "JOSE ROGER FLORINDEZ CHAVEZ",
    deuda: 2956.74,
    origen: "BANCO FALABELLA",
    oferta: 1020.05,
    monto_cancelacion: 887
  },
  {
    dni: "41497281",
    nombre: "VARGAS PARIONA GUSTAVO ADOLFO",
    deuda: 5491.61,
    origen: "BANCO FALABELLA",
    oferta: 1894.05,
    monto_cancelacion: 1647
  },
  {
    dni: "41511559",
    nombre: "HENRY GUSTAVO QUIÑE OCHOA",
    deuda: 4063.7799999999997,
    origen: "BANCO FALABELLA",
    oferta: 1401.85,
    monto_cancelacion: 1219
  },
  {
    dni: "41525023",
    nombre: "GUERRERO PINTADO DINO ALBERTO",
    deuda: 1813.82,
    origen: "BANCO FALABELLA",
    oferta: 625.6,
    monto_cancelacion: 544
  },
  {
    dni: "41532871",
    nombre: "JUANA ROSANGELA SALAS ROJAS",
    deuda: 3293.27,
    origen: "BANCO FALABELLA",
    oferta: 1136.2,
    monto_cancelacion: 988
  },
  {
    dni: "41536289",
    nombre: "BREITNER ALEXANDER BERMEJO ESTRADA",
    deuda: 1886.76,
    origen: "BANCO FALABELLA",
    oferta: 650.9,
    monto_cancelacion: 566
  },
  {
    dni: "41554301",
    nombre: "IDROGO GRANDA LUIS ALBERTO",
    deuda: 5073.8,
    origen: "RIPLEY",
    oferta: 1750.3,
    monto_cancelacion: 1522
  },
  {
    dni: "41601709",
    nombre: "REYES ZARATE RUDY RAQUEL",
    deuda: 23176.59,
    origen: "MIBANCO",
    oferta: 7995.95,
    monto_cancelacion: 6953
  },
  {
    dni: "41631191",
    nombre: "ABNER NIXON YUPANQUI VASQUEZ",
    deuda: 3018.79,
    origen: "BANCO FALABELLA",
    oferta: 1041.9,
    monto_cancelacion: 906
  },
  {
    dni: "41689127",
    nombre: "REATEGUI CARLOS OMER ENRIQUE",
    deuda: 2239.01,
    origen: "BANCO FALABELLA",
    oferta: 772.8,
    monto_cancelacion: 672
  },
  {
    dni: "41720689",
    nombre: "ASUERO ANCHAYHUA GIANCARLO",
    deuda: 3820.69,
    origen: "MIBANCO",
    oferta: 1317.9,
    monto_cancelacion: 1146
  },
  {
    dni: "41721319",
    nombre: "JIMMY ARTURO PRUDENCIO VALDERRAMA",
    deuda: 5158.92,
    origen: "BANCO FALABELLA",
    oferta: 1780.2,
    monto_cancelacion: 1548
  },
  {
    dni: "41764965",
    nombre: "MONTOYA MENDOZA PAULINO GREGORIO",
    deuda: 1568.4099999999999,
    origen: "BANCO FALABELLA",
    oferta: 541.65,
    monto_cancelacion: 471
  },
  {
    dni: "41793536",
    nombre: "JORGE DANIEL ALFARO UCAÐAY",
    deuda: 2163.44,
    origen: "BANCO FALABELLA",
    oferta: 746.35,
    monto_cancelacion: 649
  },
  {
    dni: "41817866",
    nombre: "MELENDEZ RODRIGUEZ AZUCENA",
    deuda: 9473.16,
    origen: "RIPLEY",
    oferta: 3268.3,
    monto_cancelacion: 2842
  },
  {
    dni: "41835995",
    nombre: "JORGE MAS PINEDO",
    deuda: 2162.2,
    origen: "BANCO FALABELLA",
    oferta: 746.35,
    monto_cancelacion: 649
  },
  {
    dni: "41840025",
    nombre: "EVERT FREDY HOYOS BELLO",
    deuda: 6443.22,
    origen: "BANCO FALABELLA",
    oferta: 2222.95,
    monto_cancelacion: 1933
  },
  {
    dni: "41840269",
    nombre: "ROTHE RIBEL RAMIREZ ROBLES",
    deuda: 2090.63,
    origen: "BANCO FALABELLA",
    oferta: 721.05,
    monto_cancelacion: 627
  },
  {
    dni: "41866566",
    nombre: "CARLOS PEÐA PORTOCARRERO",
    deuda: 2403.07,
    origen: "BANCO FALABELLA",
    oferta: 829.15,
    monto_cancelacion: 721
  },
  {
    dni: "41870411",
    nombre: "TAFUR CASO LEONOR GRACIELA",
    deuda: 72764.58,
    origen: "MIBANCO",
    oferta: 25103.35,
    monto_cancelacion: 21829
  },
  {
    dni: "41886674",
    nombre: "RENZO ALBERTO REYES RIOS",
    deuda: 3995.09,
    origen: "BANCO FALABELLA",
    oferta: 1378.85,
    monto_cancelacion: 1199
  },
  {
    dni: "41907872",
    nombre: "FREDDY MARTIN GARCIA TORRES",
    deuda: 1062.63,
    origen: "BANCO FALABELLA",
    oferta: 366.85,
    monto_cancelacion: 319
  },
  {
    dni: "41927650",
    nombre: "FLORES LIMACHI DAVID NICANOR",
    deuda: 12491.62,
    origen: "INTERBANK",
    oferta: 4309.05,
    monto_cancelacion: 3747
  },
  {
    dni: "41958774",
    nombre: "GUTIERREZ VILLANUEVA GIANCARLO ANTONONI",
    deuda: 21878.100000000002,
    origen: "BCP",
    oferta: 7547.45,
    monto_cancelacion: 6563
  },
  {
    dni: "42010047",
    nombre: "CUADRADO CORDOVA GIANNINA NORMA",
    deuda: 44051.990000000005,
    origen: "BCP",
    oferta: 15198.4,
    monto_cancelacion: 13216
  },
  {
    dni: "42054759",
    nombre: "NELON MARIN IZQUIERDO CRUZ",
    deuda: 3243.04,
    origen: "BANCO FALABELLA",
    oferta: 1118.95,
    monto_cancelacion: 973
  },
  {
    dni: "42221478",
    nombre: "LARRY DANIEL FLOREZ GARCIA",
    deuda: 1111.91,
    origen: "BANCO FALABELLA",
    oferta: 384.1,
    monto_cancelacion: 334
  },
  {
    dni: "42381368",
    nombre: "EMMA FRIAS GONZALEZ",
    deuda: 2564.96,
    origen: "BANCO FALABELLA",
    oferta: 884.35,
    monto_cancelacion: 769
  },
  {
    dni: "42452172",
    nombre: "EDUARDO ROQUE SOLIS",
    deuda: 1042.37,
    origen: "BANCO FALABELLA",
    oferta: 359.95,
    monto_cancelacion: 313
  },
  {
    dni: "42538668",
    nombre: "ROJAS CASTILLO WILSER BENHUR",
    deuda: 18940.19,
    origen: "INTERBANK",
    oferta: 6534.3,
    monto_cancelacion: 5682
  },
  {
    dni: "42649079",
    nombre: "JORGE ENRIQUE FERNANDEZ BUSTAMANTE",
    deuda: 2081.73,
    origen: "BANCO FALABELLA",
    oferta: 718.75,
    monto_cancelacion: 625
  },
  {
    dni: "42806883",
    nombre: "SEGUNDO GRICERIO HUAMAN GUEVARA",
    deuda: 2975.79,
    origen: "BANCO FALABELLA",
    oferta: 1026.95,
    monto_cancelacion: 893
  },
  {
    dni: "42929366",
    nombre: "HELEN MARIBEL DIAZ MEJIA",
    deuda: 10127.58,
    origen: "BANCO FALABELLA",
    oferta: 3493.7,
    monto_cancelacion: 3038
  },
  {
    dni: "42939520",
    nombre: "FLORES VILCAPOMA ALFREDO ROBERTO",
    deuda: 1547.32,
    origen: "BANCO FALABELLA",
    oferta: 533.6,
    monto_cancelacion: 464
  },
  {
    dni: "43030669",
    nombre: "VICTOR ALVARO CARRILLO SANCHEZ",
    deuda: 2162.64,
    origen: "BANCO FALABELLA",
    oferta: 746.35,
    monto_cancelacion: 649
  },
  {
    dni: "43045293",
    nombre: "EDGAR YEAN VASQUEZ RIVASPLATA",
    deuda: 1782.55,
    origen: "BANCO FALABELLA",
    oferta: 615.25,
    monto_cancelacion: 535
  },
  {
    dni: "43062574",
    nombre: "BECERRA URBANO BERLY ANTON",
    deuda: 13206.7,
    origen: "INTERBANK",
    oferta: 4556.3,
    monto_cancelacion: 3962
  },
  {
    dni: "43163717",
    nombre: "MARCO ANTONIO LLERENA LLERENA",
    deuda: 2677.22,
    origen: "BANCO FALABELLA",
    oferta: 923.45,
    monto_cancelacion: 803
  },
  {
    dni: "43286741",
    nombre: "ROXANA KARINA SAMANIEGO LEIVA",
    deuda: 4463.08,
    origen: "BANCO FALABELLA",
    oferta: 1539.85,
    monto_cancelacion: 1339
  },
  {
    dni: "43316375",
    nombre: "ILDAURO HUAMAN MENDOZA",
    deuda: 7343.85,
    origen: "BANCO FALABELLA",
    oferta: 2533.45,
    monto_cancelacion: 2203
  },
  {
    dni: "43348786",
    nombre: "LUYO QUISURUCO CESAR NILTON",
    deuda: 32565.39,
    origen: "INTERBANK",
    oferta: 11235.5,
    monto_cancelacion: 9770
  },
  {
    dni: "43413719",
    nombre: "NOLBERTO LLOVERA CARRASCO",
    deuda: 1208.3,
    origen: "BANCO FALABELLA",
    oferta: 416.3,
    monto_cancelacion: 362
  },
  {
    dni: "43428130",
    nombre: "LEONARDO SANCHEZ ISABEL MARIA",
    deuda: 9555.51,
    origen: "BANCO FALABELLA",
    oferta: 3297.05,
    monto_cancelacion: 2867
  },
  {
    dni: "43451287",
    nombre: "HERRERA LEON GABY MARJORI",
    deuda: 10947.4,
    origen: "BANCO FALABELLA",
    oferta: 3776.6,
    monto_cancelacion: 3284
  },
  {
    dni: "43470713",
    nombre: "YILBER CHAEL NIÐO ASENCIO",
    deuda: 1048.02,
    origen: "BANCO FALABELLA",
    oferta: 361.1,
    monto_cancelacion: 314
  },
  {
    dni: "43492362",
    nombre: "JOSE VICTOR SANTISTEBAN CHAPOÐAN",
    deuda: 6156.52,
    origen: "BANCO FALABELLA",
    oferta: 2124.05,
    monto_cancelacion: 1847
  },
  {
    dni: "43497804",
    nombre: "CARDENAS ASMAT MELISSA MARIELA",
    deuda: 1003.9399999999999,
    origen: "RIPLEY",
    oferta: 346.15,
    monto_cancelacion: 301
  },
  {
    dni: "43547285",
    nombre: "DARWIN DAVID SUAREZ CRUZ",
    deuda: 10458.47,
    origen: "BANCO FALABELLA",
    oferta: 3608.7,
    monto_cancelacion: 3138
  },
  {
    dni: "43568372",
    nombre: "NELVIN CALDERON RAMIREZ",
    deuda: 6228.04,
    origen: "BANCO FALABELLA",
    oferta: 2148.2,
    monto_cancelacion: 1868
  },
  {
    dni: "43640392",
    nombre: "FERNANDO ENRIQUE LLAMOCCA RUMALDO",
    deuda: 8371.71,
    origen: "BANCO FALABELLA",
    oferta: 2888.8,
    monto_cancelacion: 2512
  },
  {
    dni: "43670107",
    nombre: "DARVI ISAIAS RUIZ HURTADO",
    deuda: 1415.99,
    origen: "BANCO FALABELLA",
    oferta: 488.75,
    monto_cancelacion: 425
  },
  {
    dni: "43744371",
    nombre: "MIGUEL CASTILLO LILIBETH MARITZA",
    deuda: 16615.98,
    origen: "INTERBANK",
    oferta: 5732.75,
    monto_cancelacion: 4985
  },
  {
    dni: "43810333",
    nombre: "ORELLANA SUAREZ FIORELA",
    deuda: 20043.3,
    origen: "INTERBANK",
    oferta: 6914.95,
    monto_cancelacion: 6013
  },
  {
    dni: "43957974",
    nombre: "JOSE JUAN CHAPILLIQUEN ANDRADE",
    deuda: 3197.37,
    origen: "BANCO FALABELLA",
    oferta: 1102.85,
    monto_cancelacion: 959
  },
  {
    dni: "44058667",
    nombre: "GONZALO PAUCAR CANGO",
    deuda: 5673.95,
    origen: "BCP",
    oferta: 1957.3,
    monto_cancelacion: 1702
  },
  {
    dni: "44107152",
    nombre: "EDILBERTO MOSQUEIRA SANCHEZ",
    deuda: 9946.47,
    origen: "BANCO FALABELLA",
    oferta: 3431.6,
    monto_cancelacion: 2984
  },
  {
    dni: "44144086",
    nombre: "PAREDES SILVA MICHELINE KENERY",
    deuda: 10191.36,
    origen: "INTERBANK",
    oferta: 3515.55,
    monto_cancelacion: 3057
  },
  {
    dni: "44151836",
    nombre: "MELENDEZ TANANTA MILI",
    deuda: 1064.72,
    origen: "BANCO FALABELLA",
    oferta: 366.85,
    monto_cancelacion: 319
  },
  {
    dni: "44236814",
    nombre: "ALBERT STEVIN PAZ CHAVEZ",
    deuda: 1279.97,
    origen: "BANCO FALABELLA",
    oferta: 441.6,
    monto_cancelacion: 384
  },
  {
    dni: "44271916",
    nombre: "DANIEL ALFONSO MELGAR VICENTE",
    deuda: 7795.2,
    origen: "BANCO FALABELLA",
    oferta: 2689.85,
    monto_cancelacion: 2339
  },
  {
    dni: "44371669",
    nombre: "LUIS COBEÐAS SUYON",
    deuda: 11122.67,
    origen: "BANCO FALABELLA",
    oferta: 3837.55,
    monto_cancelacion: 3337
  },
  {
    dni: "44464845",
    nombre: "ROLANDO CANAZA MAMANI",
    deuda: 2420.65,
    origen: "BANCO FALABELLA",
    oferta: 834.9,
    monto_cancelacion: 726
  },
  {
    dni: "44528534",
    nombre: "JACKELYN MILAGROS ALBINES FLORES",
    deuda: 1830.49,
    origen: "BANCO FALABELLA",
    oferta: 631.35,
    monto_cancelacion: 549
  },
  {
    dni: "44529349",
    nombre: "VILELA SOSA FIORELLA",
    deuda: 4641.96,
    origen: "BANCO FALABELLA",
    oferta: 1601.95,
    monto_cancelacion: 1393
  },
  {
    dni: "44548450",
    nombre: "TEJADA GRANDEZ KATHERIN JULIETH",
    deuda: 2621.1,
    origen: "BCP",
    oferta: 903.9,
    monto_cancelacion: 786
  },
  {
    dni: "44592952",
    nombre: "JHUMARA MELISSA GOMEZ GUTIERREZ",
    deuda: 3116.57,
    origen: "BANCO FALABELLA",
    oferta: 1075.25,
    monto_cancelacion: 935
  },
  {
    dni: "44632772",
    nombre: "LUIS ALFONSO PAZ RUIZ",
    deuda: 1092.9,
    origen: "BANCO FALABELLA",
    oferta: 377.2,
    monto_cancelacion: 328
  },
  {
    dni: "44696017",
    nombre: "PANTA CORDOVA KARLA YANINA",
    deuda: 1751.04,
    origen: "BANCO FALABELLA",
    oferta: 603.75,
    monto_cancelacion: 525
  },
  {
    dni: "44771980",
    nombre: "NOLASCO MORALES GIANNI CLAITON",
    deuda: 3719.92,
    origen: "BCP",
    oferta: 1283.4,
    monto_cancelacion: 1116
  },
  {
    dni: "44797872",
    nombre: "GIORGIO RUBY CASELLA PADILLA",
    deuda: 1402.32,
    origen: "BANCO FALABELLA",
    oferta: 484.15,
    monto_cancelacion: 421
  },
  {
    dni: "44807600",
    nombre: "YANET CAROLINA YALO ACEVEDO",
    deuda: 6430.61,
    origen: "BANCO FALABELLA",
    oferta: 2218.35,
    monto_cancelacion: 1929
  },
  {
    dni: "44818239",
    nombre: "RICHARD JHON RAMIREZ LEAÐO",
    deuda: 6690.35,
    origen: "BANCO FALABELLA",
    oferta: 2308.05,
    monto_cancelacion: 2007
  },
  {
    dni: "44826110",
    nombre: "IRMA ROSMERY CELIS SANCHEZ",
    deuda: 1311.39,
    origen: "BANCO FALABELLA",
    oferta: 451.95,
    monto_cancelacion: 393
  },
  {
    dni: "44839273",
    nombre: "CRISTINA EDITH TORRES ADRIANO",
    deuda: 10142.78,
    origen: "BANCO FALABELLA",
    oferta: 3499.45,
    monto_cancelacion: 3043
  },
  {
    dni: "44851965",
    nombre: "ANITA ALBERTINA DE LA CRUZ ROJAS",
    deuda: 16326.96,
    origen: "BANCO FALABELLA",
    oferta: 5632.7,
    monto_cancelacion: 4898
  },
  {
    dni: "44885607",
    nombre: "RUTH ESTHER SALINAS FLORES",
    deuda: 1902.29,
    origen: "BANCO FALABELLA",
    oferta: 656.65,
    monto_cancelacion: 571
  },
  {
    dni: "44897958",
    nombre: "JOSE IPARRAGUIRRE RODRIGUEZ",
    deuda: 1094.08,
    origen: "BANCO FALABELLA",
    oferta: 377.2,
    monto_cancelacion: 328
  },
  {
    dni: "44987627",
    nombre: "JUAN MANUEL JUAREZ YARLEQUE",
    deuda: 1913.58,
    origen: "BANCO FALABELLA",
    oferta: 660.1,
    monto_cancelacion: 574
  },
  {
    dni: "45194754",
    nombre: "DANDY PEZO DEL AGUILA",
    deuda: 1017.81,
    origen: "BANCO FALABELLA",
    oferta: 350.75,
    monto_cancelacion: 305
  },
  {
    dni: "45195431",
    nombre: "FASABI FASANANDO VIRGINIA",
    deuda: 4616.54,
    origen: "BANCO FALABELLA",
    oferta: 1592.75,
    monto_cancelacion: 1385
  },
  {
    dni: "45311481",
    nombre: "MARTIN YVAN COTRINA ALVAREZ",
    deuda: 1119.08,
    origen: "BANCO FALABELLA",
    oferta: 386.4,
    monto_cancelacion: 336
  },
  {
    dni: "45338897",
    nombre: "MEDINA SANCHEZ SILVIA JESUS",
    deuda: 3735.69,
    origen: "BCP",
    oferta: 1289.15,
    monto_cancelacion: 1121
  },
  {
    dni: "45411350",
    nombre: "PINEDO GARCIA TIMOTEO",
    deuda: 2860.2700000000004,
    origen: "BCP",
    oferta: 986.7,
    monto_cancelacion: 858
  },
  {
    dni: "45449266",
    nombre: "MIGUEL REYES VALVERDE",
    deuda: 3406.8,
    origen: "BANCO FALABELLA",
    oferta: 1175.3,
    monto_cancelacion: 1022
  },
  {
    dni: "45499438",
    nombre: "SONIA KATHERINE CASTILLO FONSECA",
    deuda: 2257.66,
    origen: "BANCO FALABELLA",
    oferta: 778.55,
    monto_cancelacion: 677
  },
  {
    dni: "45539640",
    nombre: "YENI KARINA AYASTA MARCOS",
    deuda: 8213.07,
    origen: "BANCO FALABELLA",
    oferta: 2833.6,
    monto_cancelacion: 2464
  },
  {
    dni: "45648196",
    nombre: "TARAMONA HERRERA ALBERTO NAGGIB",
    deuda: 1506.4499999999998,
    origen: "BANCO FALABELLA",
    oferta: 519.8,
    monto_cancelacion: 452
  },
  {
    dni: "45690924",
    nombre: "JOEL GERMAN VILLEGAS ESPINOZA",
    deuda: 9148.58,
    origen: "BANCO FALABELLA",
    oferta: 3156.75,
    monto_cancelacion: 2745
  },
  {
    dni: "45785431",
    nombre: "VELASQUEZ GUTIERREZ LUSI PATRICIA",
    deuda: 29122.3,
    origen: "INTERBANK",
    oferta: 10047.55,
    monto_cancelacion: 8737
  },
  {
    dni: "45850426",
    nombre: "ELIZABETH RUIZ CHACON",
    deuda: 1959.39,
    origen: "BANCO FALABELLA",
    oferta: 676.2,
    monto_cancelacion: 588
  },
  {
    dni: "45914740",
    nombre: "LUIS DAVID CONTRERAS CARRILLO",
    deuda: 4607.12,
    origen: "BANCO FALABELLA",
    oferta: 1589.3,
    monto_cancelacion: 1382
  },
  {
    dni: "45920312",
    nombre: "FANNY ELIZABETH VARAS REVILLA",
    deuda: 2958.46,
    origen: "BANCO FALABELLA",
    oferta: 1021.2,
    monto_cancelacion: 888
  },
  {
    dni: "46059500",
    nombre: "JOHNN FRANK PORRAS ROJAS",
    deuda: 1094.97,
    origen: "BANCO FALABELLA",
    oferta: 377.2,
    monto_cancelacion: 328
  },
  {
    dni: "46094303",
    nombre: "MICHAEL STALIN CHAVEZ CARRIL",
    deuda: 3251.8,
    origen: "BANCO FALABELLA",
    oferta: 1122.4,
    monto_cancelacion: 976
  },
  {
    dni: "46122978",
    nombre: "MARTHA ESTELA HUAYTAN NAVARRETE",
    deuda: 1086.0,
    origen: "BANCO FALABELLA",
    oferta: 374.9,
    monto_cancelacion: 326
  },
  {
    dni: "46130008",
    nombre: "CARLOS ALFREDO VALQUI HUAMANCAYO",
    deuda: 1819.43,
    origen: "BANCO FALABELLA",
    oferta: 627.9,
    monto_cancelacion: 546
  },
  {
    dni: "46180421",
    nombre: "JOSE DANIEL GUILLERMO AMAYA",
    deuda: 1159.34,
    origen: "BANCO FALABELLA",
    oferta: 400.2,
    monto_cancelacion: 348
  },
  {
    dni: "46286987",
    nombre: "DANIEL MENESES GARCIA",
    deuda: 7182.23,
    origen: "BANCO FALABELLA",
    oferta: 2478.25,
    monto_cancelacion: 2155
  },
  {
    dni: "46323581",
    nombre: "WILMER JOSE JUAREZ GUERRERO",
    deuda: 1321.84,
    origen: "BANCO FALABELLA",
    oferta: 456.55,
    monto_cancelacion: 397
  },
  {
    dni: "46470450",
    nombre: "CINTHIA ABIGAIL VILLALTA GARCIA",
    deuda: 6784.53,
    origen: "BANCO FALABELLA",
    oferta: 2340.25,
    monto_cancelacion: 2035
  },
  {
    dni: "46494109",
    nombre: "MORENO VALDIVIA JESSICA KATHERINNE",
    deuda: 2438.31,
    origen: "BANCO FALABELLA",
    oferta: 840.65,
    monto_cancelacion: 731
  },
  {
    dni: "46562689",
    nombre: "OSBER ABEL MUÐOZ PAREDES",
    deuda: 1805.3,
    origen: "BANCO FALABELLA",
    oferta: 623.3,
    monto_cancelacion: 542
  },
  {
    dni: "46679417",
    nombre: "AUGUSTO JEAN ESPINOZA GONZALEZ",
    deuda: 1564.72,
    origen: "BANCO FALABELLA",
    oferta: 539.35,
    monto_cancelacion: 469
  },
  {
    dni: "46799665",
    nombre: "GUISELL AMPARO ASMAT AGREDA",
    deuda: 5494.83,
    origen: "BANCO FALABELLA",
    oferta: 1895.2,
    monto_cancelacion: 1648
  },
  {
    dni: "46939015",
    nombre: "GIAN FRANCO KAWAJIGASHI GONZALES",
    deuda: 1653.56,
    origen: "BANCO FALABELLA",
    oferta: 570.4,
    monto_cancelacion: 496
  },
  {
    dni: "46952871",
    nombre: "JULIO RODOLFO SANCHEZ VARGAS",
    deuda: 5966.49,
    origen: "BANCO FALABELLA",
    oferta: 2058.5,
    monto_cancelacion: 1790
  },
  {
    dni: "47241884",
    nombre: "JOSE LUIS INGA RODRIGUEZ",
    deuda: 4237.65,
    origen: "BANCO FALABELLA",
    oferta: 1461.65,
    monto_cancelacion: 1271
  },
  {
    dni: "47443611",
    nombre: "RAMIREZ GARCILAZO DAVID",
    deuda: 1022.66,
    origen: "BANCO FALABELLA",
    oferta: 353.05,
    monto_cancelacion: 307
  },
  {
    dni: "47517112",
    nombre: "ANTONIO JESUS ROMERO PINEDA",
    deuda: 2764.63,
    origen: "BANCO FALABELLA",
    oferta: 953.35,
    monto_cancelacion: 829
  },
  {
    dni: "47655347",
    nombre: "LUIS RICARDO MENDOZA ALMEYDA",
    deuda: 2074.6,
    origen: "BANCO FALABELLA",
    oferta: 715.3,
    monto_cancelacion: 622
  },
  {
    dni: "47683113",
    nombre: "KIARA ESTEFANY TELLO BURGA",
    deuda: 1186.36,
    origen: "BANCO FALABELLA",
    oferta: 409.4,
    monto_cancelacion: 356
  },
  {
    dni: "47688143",
    nombre: "HUAREZ ALEJOS ASUCENA PASCUALA",
    deuda: 6993.48,
    origen: "BANCO FALABELLA",
    oferta: 2412.7,
    monto_cancelacion: 2098
  },
  {
    dni: "47806602",
    nombre: "FELIX MARTIN FUENTES TACO",
    deuda: 1503.21,
    origen: "BANCO FALABELLA",
    oferta: 518.65,
    monto_cancelacion: 451
  },
  {
    dni: "47979957",
    nombre: "KIARA BELINDA GUTIERREZ CAMASCA",
    deuda: 1693.66,
    origen: "BANCO FALABELLA",
    oferta: 584.2,
    monto_cancelacion: 508
  },
  {
    dni: "48003342",
    nombre: "YERSON ANDRES ANTON LAZO",
    deuda: 33309.83,
    origen: "BCP",
    oferta: 11491.95,
    monto_cancelacion: 9993
  },
  {
    dni: "48010001",
    nombre: "CAROL MELISSA MINAYA MINAYA",
    deuda: 1683.6,
    origen: "BANCO FALABELLA",
    oferta: 580.75,
    monto_cancelacion: 505
  },
  {
    dni: "48137503",
    nombre: "VILLANES ESPINOZA CRISTHIAN JHON",
    deuda: 7803.8099999999995,
    origen: "BANCO FALABELLA",
    oferta: 2692.15,
    monto_cancelacion: 2341
  },
  {
    dni: "70237501",
    nombre: "ANA LUCIA APOLINARIO MENDIZABAL",
    deuda: 3977.57,
    origen: "BCP",
    oferta: 1371.95,
    monto_cancelacion: 1193
  },
  {
    dni: "70242498",
    nombre: "CABANILLAS QUISPE JHON NILTON",
    deuda: 15355.54,
    origen: "INTERBANK",
    oferta: 5298.05,
    monto_cancelacion: 4607
  },
  {
    dni: "70665735",
    nombre: "GILMER FRANCISCO MERCADO SAMANA",
    deuda: 2745.08,
    origen: "BANCO FALABELLA",
    oferta: 947.6,
    monto_cancelacion: 824
  },
  {
    dni: "71004066",
    nombre: "CLAUDIA MARIA LOZADA BACILIO",
    deuda: 1047.47,
    origen: "BANCO FALABELLA",
    oferta: 361.1,
    monto_cancelacion: 314
  },
  {
    dni: "72231877",
    nombre: "LEONEL EUSEBIO LEANDRO COTILLO",
    deuda: 3718.3,
    origen: "BANCO FALABELLA",
    oferta: 1282.25,
    monto_cancelacion: 1115
  },
  {
    dni: "72490073",
    nombre: "EFFIO TARRILLO MARY",
    deuda: 14844.37,
    origen: "INTERBANK",
    oferta: 5120.95,
    monto_cancelacion: 4453
  },
  {
    dni: "73319127",
    nombre: "DANTE MARTIN ORDOÐEZ COYCO",
    deuda: 1235.92,
    origen: "BANCO FALABELLA",
    oferta: 426.65,
    monto_cancelacion: 371
  },
  {
    dni: "80112525",
    nombre: "CABREJOS ALARCON DE BORDA SUSY CLARA",
    deuda: 1318.97,
    origen: "BANCO FALABELLA",
    oferta: 455.4,
    monto_cancelacion: 396
  },
  {
    dni: "80162303",
    nombre: "MIGUEL CARLOS HUERTA SEBASTIAN",
    deuda: 6698.15,
    origen: "BCP",
    oferta: 2310.35,
    monto_cancelacion: 2009
  },
  {
    dni: "80259453",
    nombre: "SEGUNDO MISAEL DAVILA ALBURQUEQUE",
    deuda: 3236.52,
    origen: "BANCO FALABELLA",
    oferta: 1116.65,
    monto_cancelacion: 971
  },
  {
    dni: "80260487",
    nombre: "JUAN MANUEL CHERO GARCIA",
    deuda: 46275.6,
    origen: "BANCO FALABELLA",
    oferta: 15965.45,
    monto_cancelacion: 13883
  },
  {
    dni: "80377854",
    nombre: "ORDO�EZ MOLINA MAYBRID ROSSI",
    deuda: 17826.94,
    origen: "MIBANCO",
    oferta: 6150.2,
    monto_cancelacion: 5348
  },
  {
    dni: "80403740",
    nombre: "CHAVEZ GOMEZ FERNANDO GONZALO",
    deuda: 30936.32,
    origen: "BCP",
    oferta: 10673.15,
    monto_cancelacion: 9281
  },
  {
    dni: "80491783",
    nombre: "OCAMPOS GIRON MARIA EUDOCIA",
    deuda: 9501.45,
    origen: "RIPLEY",
    oferta: 3277.5,
    monto_cancelacion: 2850
  },
  {
    dni: "80588530",
    nombre: "LUZ ELENA ACUÐA VASQUEZ",
    deuda: 11915.02,
    origen: "BANCO FALABELLA",
    oferta: 4111.25,
    monto_cancelacion: 3575
  },
  {
    dni: "80594451",
    nombre: "CASTILLO SICHE YESENIA MARIA",
    deuda: 2304.48,
    origen: "RIPLEY",
    oferta: 794.65,
    monto_cancelacion: 691
  },
  {
    dni: "80634250",
    nombre: "ADAN ROBERTO VILLAR CHACHI",
    deuda: 3084.1,
    origen: "BANCO FALABELLA",
    oferta: 1063.75,
    monto_cancelacion: 925
  },
  {
    dni: "1123045",
    nombre: "MARIA EUMELIA INGA MORI",
    deuda: 42605.09,
    origen: "BANCO FALABELLA",
    oferta: 14699.3,
    monto_cancelacion: 12782
  },
  {
    dni: "2640635",
    nombre: "LUIS FERNANDO BENAVENTE ARAUJO",
    deuda: 18391.08,
    origen: "BANCO FALABELLA",
    oferta: 6344.55,
    monto_cancelacion: 5517
  },
  {
    dni: "2819649",
    nombre: "RICARDO LUPUCHE PALOMINO",
    deuda: 15038.32,
    origen: "BANCO FALABELLA",
    oferta: 5187.65,
    monto_cancelacion: 4511
  },
  {
    dni: "3597071",
    nombre: "HILDA SILUPU YARLEQUE",
    deuda: 1529.0300000000002,
    origen: "INTERBANK",
    oferta: 527.85,
    monto_cancelacion: 459
  },
  {
    dni: "4426376",
    nombre: "SANDRO CELESTINO ARCE ROMERO",
    deuda: 7436.48,
    origen: "BANCO FALABELLA",
    oferta: 2565.65,
    monto_cancelacion: 2231
  },
  {
    dni: "6383982",
    nombre: "ROGER ELIAS VIZCARRA CARRASCO",
    deuda: 5418.41,
    origen: "BANCO FALABELLA",
    oferta: 1869.9,
    monto_cancelacion: 1626
  },
  {
    dni: "6877591",
    nombre: "CASTAÑEDA LAYZA SEGUNDO CESAR",
    deuda: 17494.7,
    origen: "INTERBANK",
    oferta: 6035.2,
    monto_cancelacion: 5248
  },
  {
    dni: "7107930",
    nombre: "PALACIOS PEREZ CLAUDIO",
    deuda: 3389.0699999999997,
    origen: "BCP",
    oferta: 1169.55,
    monto_cancelacion: 1017
  },
  {
    dni: "7466791",
    nombre: "VICTOR HUGO DEZA COLLANTES",
    deuda: 3273.69,
    origen: "BANCO FALABELLA",
    oferta: 1129.3,
    monto_cancelacion: 982
  },
  {
    dni: "8081230",
    nombre: "SABINA ROSA ALEGRE MARQUINA",
    deuda: 6558.94,
    origen: "BANCO FALABELLA",
    oferta: 2263.2,
    monto_cancelacion: 1968
  },
  {
    dni: "8686298",
    nombre: "LESCANO MEDINA LAURA MARGOT",
    deuda: 28467.649999999998,
    origen: "BANCO FALABELLA",
    oferta: 9821.0,
    monto_cancelacion: 8540
  },
  {
    dni: "9371145",
    nombre: "JOSE CAMILO ESQUIVEL RODRIGUEZ",
    deuda: 12933.76,
    origen: "BANCO FALABELLA",
    oferta: 4462.0,
    monto_cancelacion: 3880
  },
  {
    dni: "9548045",
    nombre: "JOSE ANTONIO JARA PEREZ",
    deuda: 3747.93,
    origen: "BANCO FALABELLA",
    oferta: 1292.6,
    monto_cancelacion: 1124
  },
  {
    dni: "9628773",
    nombre: "ZENON MARIANO CABELLO RETUERTO",
    deuda: 29434.36,
    origen: "BANCO FALABELLA",
    oferta: 10154.5,
    monto_cancelacion: 8830
  },
  {
    dni: "9638711",
    nombre: "REYNALDO RAFAEL BAUTISTA ENRIQUEZ",
    deuda: 9604.04,
    origen: "BANCO FALABELLA",
    oferta: 3313.15,
    monto_cancelacion: 2881
  },
  {
    dni: "9650616",
    nombre: "CARLOS RUFINO LOAYZA CHOQUE",
    deuda: 4630.47,
    origen: "BANCO FALABELLA",
    oferta: 1597.35,
    monto_cancelacion: 1389
  },
  {
    dni: "9899322",
    nombre: "MARCO ANTONIO BARBARAN GUERRA",
    deuda: 25976.82,
    origen: "BANCO FALABELLA",
    oferta: 8961.95,
    monto_cancelacion: 7793
  },
  {
    dni: "10045334",
    nombre: "LUZA MINAYA YEMI",
    deuda: 3045.69,
    origen: "BANCO FALABELLA",
    oferta: 1051.1,
    monto_cancelacion: 914
  },
  {
    dni: "10177906",
    nombre: "ARIAS SOLIS ABILIA ALICIA",
    deuda: 3471.2999999999997,
    origen: "MIBANCO",
    oferta: 1197.15,
    monto_cancelacion: 1041
  },
  {
    dni: "10281708",
    nombre: "GINGER GABRIELA CARDENAS LOAYZA",
    deuda: 34463.53,
    origen: "BANCO FALABELLA",
    oferta: 11889.85,
    monto_cancelacion: 10339
  },
  {
    dni: "10358761",
    nombre: "MILTON JORGE MARTINEZ QUINTANA",
    deuda: 1584.98,
    origen: "BANCO FALABELLA",
    oferta: 546.25,
    monto_cancelacion: 475
  },
  {
    dni: "10567661",
    nombre: "FLORES SILVA SALOMON",
    deuda: 10669.49,
    origen: "RIPLEY",
    oferta: 3681.15,
    monto_cancelacion: 3201
  },
  {
    dni: "10670582",
    nombre: "SUJEY CRISTINA RAMIREZ TORRES",
    deuda: 18003.85,
    origen: "BANCO FALABELLA",
    oferta: 6211.15,
    monto_cancelacion: 5401
  },
  {
    dni: "15440159",
    nombre: "REVELINO LUNARDI HERRERA ARANDA",
    deuda: 2935.73,
    origen: "BANCO FALABELLA",
    oferta: 1013.15,
    monto_cancelacion: 881
  },
  {
    dni: "15746034",
    nombre: "ALFREDO MENDEZ LAZO",
    deuda: 20550.54,
    origen: "BANCO FALABELLA",
    oferta: 7089.75,
    monto_cancelacion: 6165
  },
  {
    dni: "15843705",
    nombre: "AYALA BOTTONI SEBASTIAN CESAR",
    deuda: 17036.82,
    origen: "BANCO FALABELLA",
    oferta: 5877.65,
    monto_cancelacion: 5111
  },
  {
    dni: "16407397",
    nombre: "MARCO ANTONIO OLAZABAL MARTINEZ",
    deuda: 1551.27,
    origen: "BANCO FALABELLA",
    oferta: 534.75,
    monto_cancelacion: 465
  },
  {
    dni: "16520883",
    nombre: "WALTHER PAUL BACA SILVA",
    deuda: 4753.12,
    origen: "BANCO FALABELLA",
    oferta: 1639.9,
    monto_cancelacion: 1426
  },
  {
    dni: "16788817",
    nombre: "FELICIANO RODRIGUEZ MIJA",
    deuda: 13388.36,
    origen: "BANCO FALABELLA",
    oferta: 4619.55,
    monto_cancelacion: 4017
  },
  {
    dni: "18127219",
    nombre: "CARLOS CESAR MEGO MONZON",
    deuda: 2637.52,
    origen: "BANCO FALABELLA",
    oferta: 909.65,
    monto_cancelacion: 791
  },
  {
    dni: "18127614",
    nombre: "JORGE LUCAS GUTIERREZ QUIÐONES",
    deuda: 74649.55,
    origen: "BANCO FALABELLA",
    oferta: 25754.25,
    monto_cancelacion: 22395
  },
  {
    dni: "18132921",
    nombre: "JULIO CESAR MEDINA ALVA",
    deuda: 20693.41,
    origen: "BANCO FALABELLA",
    oferta: 7139.2,
    monto_cancelacion: 6208
  },
  {
    dni: "21869163",
    nombre: "MARIO DANIEL FLORES ATUNCAR",
    deuda: 53465.979999999996,
    origen: "INTERBANK",
    oferta: 18446.0,
    monto_cancelacion: 16040
  },
  {
    dni: "21884250",
    nombre: "ALFONSO ENRIQUE MENDOZA BENAVIDES",
    deuda: 1329.11,
    origen: "BANCO FALABELLA",
    oferta: 458.85,
    monto_cancelacion: 399
  },
  {
    dni: "22960802",
    nombre: "GREGORIA RIVERA ARMAS",
    deuda: 1165.61,
    origen: "BANCO FALABELLA",
    oferta: 402.5,
    monto_cancelacion: 350
  },
  {
    dni: "25637999",
    nombre: "JUAN RUBEN CONGA MORALES",
    deuda: 57371.07,
    origen: "BCP",
    oferta: 19792.65,
    monto_cancelacion: 17211
  },
  {
    dni: "25852442",
    nombre: "FERNANDO MANUEL BAZAN LIÐAN",
    deuda: 1604.79,
    origen: "BANCO FALABELLA",
    oferta: 553.15,
    monto_cancelacion: 481
  },
  {
    dni: "26717811",
    nombre: "NARDA PATRICIA LEAL HUACCHA",
    deuda: 17569.36,
    origen: "BANCO FALABELLA",
    oferta: 6061.65,
    monto_cancelacion: 5271
  },
  {
    dni: "26726827",
    nombre: "MARCO ANTONIO LEON MOSTACERO",
    deuda: 14324.54,
    origen: "BANCO FALABELLA",
    oferta: 4941.55,
    monto_cancelacion: 4297
  },
  {
    dni: "30843114",
    nombre: "ESTRAVER GUARNIZ FRANCISCO ZENON",
    deuda: 15949.12,
    origen: "INTERBANK",
    oferta: 5502.75,
    monto_cancelacion: 4785
  },
  {
    dni: "32542413",
    nombre: "PONCE SALINAS FANY EDITH",
    deuda: 3914.2400000000002,
    origen: "RIPLEY",
    oferta: 1350.1,
    monto_cancelacion: 1174
  },
  {
    dni: "32927280",
    nombre: "LEYVA DIAZ VICTORIA MARGARITA",
    deuda: 11202.5,
    origen: "BANCO FALABELLA",
    oferta: 3865.15,
    monto_cancelacion: 3361
  },
  {
    dni: "40185192",
    nombre: "JESUS JACQUELINE SERVIGON SOLANO",
    deuda: 4750.28,
    origen: "BCP",
    oferta: 1638.75,
    monto_cancelacion: 1425
  },
  {
    dni: "40401526",
    nombre: "OMAR HELI SARMIENTO LOPEZ",
    deuda: 13143.5,
    origen: "BANCO FALABELLA",
    oferta: 4534.45,
    monto_cancelacion: 3943
  },
  {
    dni: "40449099",
    nombre: "MARTIN GUILLERMO HERRERA CAMACHO",
    deuda: 1440.08,
    origen: "BANCO FALABELLA",
    oferta: 496.8,
    monto_cancelacion: 432
  },
  {
    dni: "40479133",
    nombre: "MELISSA HELGA PRIETO SANCHEZ",
    deuda: 8058.85,
    origen: "INTERBANK",
    oferta: 2780.7,
    monto_cancelacion: 2418
  },
  {
    dni: "40539275",
    nombre: "PETER JONATHAN RIVERA-DEL-CARPIO BACA",
    deuda: 68918.04000000001,
    origen: "BANCO FALABELLA",
    oferta: 23776.25,
    monto_cancelacion: 20675
  },
  {
    dni: "40679359",
    nombre: "MARCO ANTONIO FERREYRA SOPLIN",
    deuda: 2849.17,
    origen: "INTERBANK",
    oferta: 983.25,
    monto_cancelacion: 855
  },
  {
    dni: "40686945",
    nombre: "SAUL ENRIQUE SOEL QUISPE",
    deuda: 1625.27,
    origen: "BANCO FALABELLA",
    oferta: 561.2,
    monto_cancelacion: 488
  },
  {
    dni: "40752714",
    nombre: "JESSICA DEL ROSARIO NAQUICHE SANTOS",
    deuda: 2112.92,
    origen: "BANCO FALABELLA",
    oferta: 729.1,
    monto_cancelacion: 634
  },
  {
    dni: "40933617",
    nombre: "JOSE LUIS MANRIQUE CONISLLA",
    deuda: 1362.26,
    origen: "BANCO FALABELLA",
    oferta: 470.35,
    monto_cancelacion: 409
  },
  {
    dni: "40940884",
    nombre: "DEL-AGUILA OCHOA JESSI MARIBEL",
    deuda: 1537.37,
    origen: "BANCO FALABELLA",
    oferta: 530.15,
    monto_cancelacion: 461
  },
  {
    dni: "41059797",
    nombre: "WILDER HUMBERTO SANCHEZ SAMAN",
    deuda: 1181.7,
    origen: "BANCO FALABELLA",
    oferta: 408.25,
    monto_cancelacion: 355
  },
  {
    dni: "41099087",
    nombre: "ELMER JAIME CCENTE HUAMAN",
    deuda: 18245.05,
    origen: "BCP",
    oferta: 6295.1,
    monto_cancelacion: 5474
  },
  {
    dni: "41393032",
    nombre: "LINDO MALPARTIDA KAREN JESSICA",
    deuda: 2840.05,
    origen: "RIPLEY",
    oferta: 979.8,
    monto_cancelacion: 852
  },
  {
    dni: "41410780",
    nombre: "BRYAN JEFFERSON YANOVICH MORALES",
    deuda: 1914.18,
    origen: "BANCO FALABELLA",
    oferta: 660.1,
    monto_cancelacion: 574
  },
  {
    dni: "41443750",
    nombre: "CHRISTIAN MARLON YSASI PALOMINO",
    deuda: 5792.84,
    origen: "BANCO FALABELLA",
    oferta: 1998.7,
    monto_cancelacion: 1738
  },
  {
    dni: "41498016",
    nombre: "ELIZABETH TELLO CORRALES",
    deuda: 1111.58,
    origen: "BANCO FALABELLA",
    oferta: 382.95,
    monto_cancelacion: 333
  },
  {
    dni: "41599776",
    nombre: "JULIO CESAR FERNANDEZ FRANCO",
    deuda: 10698.11,
    origen: "BCP",
    oferta: 3690.35,
    monto_cancelacion: 3209
  },
  {
    dni: "41629431",
    nombre: "SARA AZUCENA BEAZLEY CHAVEZ",
    deuda: 8169.61,
    origen: "BANCO FALABELLA",
    oferta: 2818.65,
    monto_cancelacion: 2451
  },
  {
    dni: "41838845",
    nombre: "ANIBAL ERNESTO ESPINOZA CESPEDES",
    deuda: 1857.99,
    origen: "BANCO FALABELLA",
    oferta: 640.55,
    monto_cancelacion: 557
  },
  {
    dni: "41934798",
    nombre: "CESAR ANTONIO PEBE MARCOS",
    deuda: 1051.63,
    origen: "BANCO FALABELLA",
    oferta: 362.25,
    monto_cancelacion: 315
  },
];