// 자바 기준으로 작성되었음

class ResuourecePool {
    public Resource get() {
        Resource result;
        result = available.isEmpty() ? Resource.create() : available.pop();
        allocated.add(result);

        return result;
    }
}

private Deque<Resource> available;
private List<Resource> allocated;
