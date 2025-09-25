var wms_layers = [];

var format_LISTANOMINAL2022_0 = new ol.format.GeoJSON();
var features_LISTANOMINAL2022_0 = format_LISTANOMINAL2022_0.readFeatures(json_LISTANOMINAL2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LISTANOMINAL2022_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LISTANOMINAL2022_0.addFeatures(features_LISTANOMINAL2022_0);
var lyr_LISTANOMINAL2022_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LISTANOMINAL2022_0, 
                style: style_LISTANOMINAL2022_0,
                popuplayertitle: 'LISTA NOMINAL 2022',
                interactive: true,
    title: 'LISTA NOMINAL 2022<br />\
    <img src="styles/legend/LISTANOMINAL2022_0_0.png" /> 132 - 2137<br />\
    <img src="styles/legend/LISTANOMINAL2022_0_1.png" /> 2138 - 4142<br />\
    <img src="styles/legend/LISTANOMINAL2022_0_2.png" /> 4143 - 6146<br />\
    <img src="styles/legend/LISTANOMINAL2022_0_3.png" /> 6147 - 8151<br />\
    <img src="styles/legend/LISTANOMINAL2022_0_4.png" /> 8152 - 10156<br />' });

lyr_LISTANOMINAL2022_0.setVisible(true);
var layersList = [lyr_LISTANOMINAL2022_0];
lyr_LISTANOMINAL2022_0.set('fieldAliases', {'id': 'id', 'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', 'CIRCUNSCRIPCION': 'CIRCUNSCRIPCION', 'ID_ESTADO': 'ID_ESTADO', 'NOMBRE_ESTADO': 'NOMBRE_ESTADO', 'ID_DISTRITO_LOCAL': 'ID_DISTRITO_LOCAL', 'CABECERA_DISTRITAL_LOCAL': 'CABECERA_DISTRITAL_LOCAL', 'ID_MUNICIPIO': 'ID_MUNICIPIO', 'CASILLAS': 'CASILLAS', 'PAN': 'PAN', 'PRI': 'PRI', 'PRD': 'PRD', 'PVEM': 'PVEM', 'PT': 'PT', 'MC': 'MC', 'MORENA': 'MORENA', 'MAS': 'MAS', 'CXQROO': 'CXQROO', 'FXMQROO': 'FXMQROO', 'PAN_PRD_CXQROO': 'PAN_PRD_CXQROO', 'PAN_PRD': 'PAN_PRD', 'PAN_CXQROO': 'PAN_CXQROO', 'PRD_CXQROO': 'PRD_CXQROO', 'PVEM_PT_MORENA_FXMQROO': 'PVEM_PT_MORENA_FXMQROO', 'PVEM_PT_MORENA': 'PVEM_PT_MORENA', 'PVEM_PT_FXMQROO': 'PVEM_PT_FXMQROO', 'PVEM_MORENA_FXMQROO': 'PVEM_MORENA_FXMQROO', 'PT_MORENA_FXMQROO': 'PT_MORENA_FXMQROO', 'PVEM_PT': 'PVEM_PT', 'PVEM_MORENA': 'PVEM_MORENA', 'PVEM_FXMQROO': 'PVEM_FXMQROO', 'PT_MORENA': 'PT_MORENA', 'PT_FXMQROO': 'PT_FXMQROO', 'MORENA_FXMQROO': 'MORENA_FXMQROO', 'NUM_VOTOS_VALIDOS': 'NUM_VOTOS_VALIDOS', 'NUM_VOTOS_CAN_NREG': 'NUM_VOTOS_CAN_NREG', 'NUM_VOTOS_NULOS': 'NUM_VOTOS_NULOS', 'TOTAL_VOTOS': 'TOTAL_VOTOS', 'LISTA_NOMINAL': 'LISTA_NOMINAL', });
lyr_LISTANOMINAL2022_0.set('fieldImages', {'id': 'TextEdit', 'ID': 'Range', 'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'DISTRITO_L': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'Range', 'GEOMETRY1_': 'TextEdit', 'CIRCUNSCRIPCION': 'TextEdit', 'ID_ESTADO': 'Range', 'NOMBRE_ESTADO': 'TextEdit', 'ID_DISTRITO_LOCAL': 'Range', 'CABECERA_DISTRITAL_LOCAL': 'TextEdit', 'ID_MUNICIPIO': 'Range', 'CASILLAS': 'Range', 'PAN': 'Range', 'PRI': 'Range', 'PRD': 'Range', 'PVEM': 'Range', 'PT': 'Range', 'MC': 'Range', 'MORENA': 'Range', 'MAS': 'Range', 'CXQROO': 'Range', 'FXMQROO': 'Range', 'PAN_PRD_CXQROO': 'Range', 'PAN_PRD': 'Range', 'PAN_CXQROO': 'Range', 'PRD_CXQROO': 'Range', 'PVEM_PT_MORENA_FXMQROO': 'Range', 'PVEM_PT_MORENA': 'Range', 'PVEM_PT_FXMQROO': 'Range', 'PVEM_MORENA_FXMQROO': 'Range', 'PT_MORENA_FXMQROO': 'Range', 'PVEM_PT': 'Range', 'PVEM_MORENA': 'Range', 'PVEM_FXMQROO': 'Range', 'PT_MORENA': 'Range', 'PT_FXMQROO': 'Range', 'MORENA_FXMQROO': 'Range', 'NUM_VOTOS_VALIDOS': 'Range', 'NUM_VOTOS_CAN_NREG': 'Range', 'NUM_VOTOS_NULOS': 'Range', 'TOTAL_VOTOS': 'Range', 'LISTA_NOMINAL': 'Range', });
lyr_LISTANOMINAL2022_0.set('fieldLabels', {'id': 'no label', 'ID': 'no label', 'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'GEOMETRY1_': 'no label', 'CIRCUNSCRIPCION': 'no label', 'ID_ESTADO': 'no label', 'NOMBRE_ESTADO': 'no label', 'ID_DISTRITO_LOCAL': 'no label', 'CABECERA_DISTRITAL_LOCAL': 'no label', 'ID_MUNICIPIO': 'no label', 'CASILLAS': 'no label', 'PAN': 'no label', 'PRI': 'no label', 'PRD': 'no label', 'PVEM': 'no label', 'PT': 'no label', 'MC': 'no label', 'MORENA': 'no label', 'MAS': 'no label', 'CXQROO': 'no label', 'FXMQROO': 'no label', 'PAN_PRD_CXQROO': 'no label', 'PAN_PRD': 'no label', 'PAN_CXQROO': 'no label', 'PRD_CXQROO': 'no label', 'PVEM_PT_MORENA_FXMQROO': 'no label', 'PVEM_PT_MORENA': 'no label', 'PVEM_PT_FXMQROO': 'no label', 'PVEM_MORENA_FXMQROO': 'no label', 'PT_MORENA_FXMQROO': 'no label', 'PVEM_PT': 'no label', 'PVEM_MORENA': 'no label', 'PVEM_FXMQROO': 'no label', 'PT_MORENA': 'no label', 'PT_FXMQROO': 'no label', 'MORENA_FXMQROO': 'no label', 'NUM_VOTOS_VALIDOS': 'no label', 'NUM_VOTOS_CAN_NREG': 'no label', 'NUM_VOTOS_NULOS': 'no label', 'TOTAL_VOTOS': 'no label', 'LISTA_NOMINAL': 'no label', });
lyr_LISTANOMINAL2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});