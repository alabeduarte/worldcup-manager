describe('WorldSoccerAPI', function () {
  var expectedCountries = [ { name: 'Brasil' }, { name: 'Italy' }, { name: 'Spain' } ];
  var CustomHttpRequest = createSpyObj('CustomHttpRequest', ['get']);
  CustomHttpRequest.get.andCallFake(function (url, success) {
    success(expectedCountries);
  });

  beforeEach(module(function ($provide) {
    $provide.value('CustomHttpRequest', CustomHttpRequest);
  }));

  it('should get an instance of WorldSoccerAPI factory', inject(function (WorldSoccerAPI) {
    expect(WorldSoccerAPI).toBeDefined();
  }));

  it('should get all countries', inject(function (WorldSoccerAPI) {
    WorldSoccerAPI.get('/countries', function (countries) {
      expect(CustomHttpRequest.get)
        .toHaveBeenCalledWith('http://worldsoccer-api.herokuapp.com/countries', any(Function));

      expect(expectedCountries).toEqual(countries);
    });
  }));

});