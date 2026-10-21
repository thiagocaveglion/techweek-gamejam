const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetEventVar
	];
};
self.C3_JsPropNameTable = [
	{"8Direções": 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{rodolfo: 0},
	{Sólido: 0},
	{chao: 0},
	{titulo: 0},
	{chave: 0},
	{moedas: 0},
	{porta: 0},
	{portaAbrindo: 0},
	{lava: 0},
	{chaves: 0}
];

self.InstanceType = {
	rodolfo: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	titulo: class extends self.ISpriteFontInstance {},
	chave: class extends self.ISpriteInstance {},
	moedas: class extends self.ITextInstance {},
	porta: class extends self.ISpriteInstance {},
	portaAbrindo: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {}
}