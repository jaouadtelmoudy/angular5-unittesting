import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component:VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment total votes when upVoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement total votes when downVoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});