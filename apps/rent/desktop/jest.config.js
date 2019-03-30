module.exports = {
  name: 'rent-desktop',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/rent/desktop/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
