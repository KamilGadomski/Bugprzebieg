var wms_layers = [];

var format_1940_0 = new ol.format.GeoJSON();
var features_1940_0 = format_1940_0.readFeatures(json_1940_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1940_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1940_0.addFeatures(features_1940_0);
var lyr_1940_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1940_0, 
                style: style_1940_0,
                popuplayertitle: '1940',
                interactive: false,
                title: '<img src="styles/legend/1940_0.png" /> 1940'
            });
var format_1990_1 = new ol.format.GeoJSON();
var features_1990_1 = format_1990_1.readFeatures(json_1990_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1990_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_1.addFeatures(features_1990_1);
var lyr_1990_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_1, 
                style: style_1990_1,
                popuplayertitle: '1990',
                interactive: false,
                title: '<img src="styles/legend/1990_1.png" /> 1990'
            });
var format_Sumakoryt_2 = new ol.format.GeoJSON();
var features_Sumakoryt_2 = format_Sumakoryt_2.readFeatures(json_Sumakoryt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumakoryt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumakoryt_2.addFeatures(features_Sumakoryt_2);
var lyr_Sumakoryt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumakoryt_2, 
                style: style_Sumakoryt_2,
                popuplayertitle: 'Suma koryt',
                interactive: true,
                title: '<img src="styles/legend/Sumakoryt_2.png" /> Suma koryt'
            });
var format_Zawszepynea_3 = new ol.format.GeoJSON();
var features_Zawszepynea_3 = format_Zawszepynea_3.readFeatures(json_Zawszepynea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zawszepynea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zawszepynea_3.addFeatures(features_Zawszepynea_3);
var lyr_Zawszepynea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zawszepynea_3, 
                style: style_Zawszepynea_3,
                popuplayertitle: 'Zawsze płyneła',
                interactive: false,
                title: '<img src="styles/legend/Zawszepynea_3.png" /> Zawsze płyneła'
            });

lyr_1940_0.setVisible(true);lyr_1990_1.setVisible(true);lyr_Sumakoryt_2.setVisible(true);lyr_Zawszepynea_3.setVisible(true);
var layersList = [lyr_1940_0,lyr_1990_1,lyr_Sumakoryt_2,lyr_Zawszepynea_3];
lyr_1940_0.set('fieldAliases', {'Id': 'Id', 'NoteType': 'NoteType', 'Name': 'Name', 'Notes': 'Notes', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_1990_1.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sumakoryt_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_BUG_19': 'FID_BUG_19', 'Id': 'Id', 'NoteType': 'NoteType', 'Name': 'Name', 'Notes': 'Notes', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'FID_Raster': 'FID_Raster', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Zawszepynea_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_RasterT_Reclas_SmoothPolygon': 'FID_RasterT_Reclas_SmoothPolygon', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_BUG_1940': 'FID_BUG_1940', 'Id_1': 'Id', 'NoteType': 'NoteType', 'Name': 'Name', 'Notes': 'Notes', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_1940_0.set('fieldImages', {'Id': 'TextEdit', 'NoteType': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1990_1.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sumakoryt_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_BUG_19': 'TextEdit', 'Id': 'TextEdit', 'NoteType': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zawszepynea_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_RasterT_Reclas_SmoothPolygon': 'Range', 'Id': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'FID_BUG_1940': 'Range', 'Id_1': 'Range', 'NoteType': 'Range', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1940_0.set('fieldLabels', {'Id': 'no label', 'NoteType': 'no label', 'Name': 'no label', 'Notes': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_1990_1.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sumakoryt_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_BUG_19': 'no label', 'Id': 'no label', 'NoteType': 'no label', 'Name': 'no label', 'Notes': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'FID_Raster': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Zawszepynea_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_RasterT_Reclas_SmoothPolygon': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_BUG_1940': 'no label', 'Id_1': 'no label', 'NoteType': 'no label', 'Name': 'no label', 'Notes': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Zawszepynea_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});