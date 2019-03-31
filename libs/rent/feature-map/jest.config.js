module.exports = {
  name: 'rent-feature-map',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rent/feature-map',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
