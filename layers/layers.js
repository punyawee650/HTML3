var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Bingmaps_1 = new ol.layer.Tile({
            'title': 'Bing maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amphoe_4 = new ol.format.GeoJSON();
var features_amphoe_4 = format_amphoe_4.readFeatures(json_amphoe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amphoe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amphoe_4.addFeatures(features_amphoe_4);
var lyr_amphoe_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amphoe_4, 
                style: style_amphoe_4,
                interactive: true,
                title: '<img src="styles/legend/amphoe_4.png" /> amphoe'
            });
var format_water_way_5 = new ol.format.GeoJSON();
var features_water_way_5 = format_water_way_5.readFeatures(json_water_way_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_way_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_way_5.addFeatures(features_water_way_5);
var lyr_water_way_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_way_5, 
                style: style_water_way_5,
                interactive: true,
                title: '<img src="styles/legend/water_way_5.png" /> water_way'
            });
var format_village_6 = new ol.format.GeoJSON();
var features_village_6 = format_village_6.readFeatures(json_village_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_village_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_6.addFeatures(features_village_6);
var lyr_village_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_village_6, 
                style: style_village_6,
                interactive: true,
                title: '<img src="styles/legend/village_6.png" /> village'
            });

lyr_ESRI_0.setVisible(true);lyr_Bingmaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_amphoe_4.setVisible(true);lyr_water_way_5.setVisible(true);lyr_village_6.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_Bingmaps_1,lyr_GoogleSatellite_2,lyr_OSMStandard_3,lyr_amphoe_4,lyr_water_way_5,lyr_village_6];
lyr_amphoe_4.set('fieldAliases', {'ID': 'ID', 'AMP_CODE': 'AMP_CODE', 'AMP_TH': 'AMP_TH', 'AMP_EN': 'AMP_EN', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'AREA': 'AREA', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_water_way_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_village_6.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', });
lyr_amphoe_4.set('fieldImages', {'ID': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_TH': 'TextEdit', 'AMP_EN': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'AREA': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_water_way_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_village_6.set('fieldImages', {'NRD_CODE': '', 'VILL_CODE': '', 'VILL_NAM_T': '', 'PROV_CODE': '', });
lyr_amphoe_4.set('fieldLabels', {'ID': 'inline label - always visible', 'AMP_CODE': 'no label', 'AMP_TH': 'no label', 'AMP_EN': 'inline label - always visible', 'PROV_CODE': 'inline label - always visible', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'AREA': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_water_way_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_village_6.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', });
lyr_village_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});