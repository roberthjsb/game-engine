import { Turn } from '../../src/models/turn.model';
import { Player } from '../../src/models/player.model';

describe('Turn', () => {
  it('should initialize player attribute as null when we create a turn model', () => {
    const turn = new Turn();

    expect(turn.player).toBeUndefined();
  });

  it('should set player turn setPlayerTurn method is called', () => {
    const turn = new Turn();

    const player = new Player('p1', 'player 1', 'avatar');

    turn.setPlayerTurn(player);

    expect(turn.player).not.toBeUndefined();
    expect(turn.player?.id).toEqual('p1');
    expect(turn.round).toEqual(1);
  });
});
