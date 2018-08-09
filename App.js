import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { Data } from './data'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '100%',
      height: '100%',
      dataFormat: 'json',
    };

    this.libraryPath = require('./assets/fusioncharts.html');
  } 

  render() {
    return (
        <ScrollView style={{flex:1}}>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'area2d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.area2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'bar2d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.area2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'bar3d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.area2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'boxandwhisker2d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.boxandwhisker2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'candlestick'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.candlestick}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'column2d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.area2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'column3d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.area2d}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'doughnut2d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.donut}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
          <View style={styles.chartContainer}>
            <FusionCharts
              type={'doughnut3d'}
              width={this.state.width}
              height={this.state.height}
              dataFormat={this.state.dataFormat}
              dataSource={Data.data.donut}
              libraryPath={this.libraryPath} // set the libraryPath property
            />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});